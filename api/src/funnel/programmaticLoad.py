from neo4j import GraphDatabase
from minio import Minio
# from minio.error import ResponseError
import zlib
import gzip
import pandas as pd
from io import StringIO
import time

def stream_gzip_decompress(stream):
    dec = zlib.decompressobj(32 + zlib.MAX_WBITS)  # offset 32 to skip the header
    for chunk in stream:
        rv = dec.decompress(chunk)
        if rv:
            yield rv

if __name__ == "__main__":
    tic = time.perf_counter()
    uri = 'bolt://localhost:7687'
    user = 'neo4j'
    password = 'letmein'

    minio_host = ''
    minio_port = 9000
    minio_access_key = 'minioadmin'
    minio_secret_key = 'minioadmin'

    driver = GraphDatabase.driver(uri, auth=(user, password))
    curatedDatasetID = "3a79fa0d-b444-42f4-927e-fdc0aaeed3f1"
    rawDatasetID = '7ec33aac-9209-4948-8804-8cc115bc8b20'
    bucket = f'raw-dataset-{rawDatasetID}'

    # data_file = 'Data-Table 1.csv.gz'
    data_file = 'test3m.bedgraph.gz'

    codebook_file = "codebook_sample_3.csv.gz"

    # mode = 'programmatic'
    mode = 'neo4j'

    # limit = 5
    # limit = 1200
    # limit = 10000
    # limit = 100000

    print()
    print(f'data_file = {data_file}')
    print(f'mode = {mode}')
    # print(f'limit = {limit}')
    print()

    time_counter = 0

    time_counter += 1
    toc = time.perf_counter()
    print(f'{time_counter} in {toc - tic:0.4f} seconds')
    tic = time.perf_counter()

    with driver.session() as session:
      result = session.run('''CALL apoc.periodic.iterate('MATCH (n:DataVariable) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
      YIELD batches, total, timeTaken, operations, updateStatistics
      RETURN batches, total, timeTaken, operations, updateStatistics;''')
      # print(result.single()[0])
      time_counter += 1
      toc = time.perf_counter()
      print(f'{time_counter} in {toc - tic:0.4f} seconds')
      tic = time.perf_counter()

      result = session.run('''CALL apoc.periodic.iterate('MATCH (n:DataVariableFieldDefinition) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
      YIELD batches, total, timeTaken, operations, updateStatistics
      RETURN batches, total, timeTaken, operations, updateStatistics;''')
      # print(result.single()[0])
      time_counter += 1
      toc = time.perf_counter()
      print(f'{time_counter} in {toc - tic:0.4f} seconds')
      tic = time.perf_counter()

      result = session.run('''CALL apoc.periodic.iterate('MATCH (n:CuratedDataset) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
      YIELD batches, total, timeTaken, operations, updateStatistics
      RETURN batches, total, timeTaken, operations, updateStatistics;''')
      # print(result.single()[0])
      time_counter += 1
      toc = time.perf_counter()
      print(f'{time_counter} in {toc - tic:0.4f} seconds')
      tic = time.perf_counter()

      result = session.run(f'''CREATE (n:CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}});''')
      # print(result.single())
      time_counter += 1
      toc = time.perf_counter()
      print(f'{time_counter} in {toc - tic:0.4f} seconds')
      tic = time.perf_counter()

    client = Minio(f'{minio_host}:{minio_port}',
                  secure=False,
                  access_key=minio_access_key,
                  secret_key=minio_secret_key)
    
    # Get a full object
    try:
        response = client.get_object(bucket, data_file)
        decompressed = gzip.decompress(response.read())
        f = StringIO(decompressed.decode())
        df = pd.read_csv(f, low_memory=False)
        print(f'len(df) = {len(df)}')
        # df = df[0:limit]
        print(f'len(df) = {len(df)}')
        time_counter += 1
        toc = time.perf_counter()
        print(f'{time_counter} in {toc - tic:0.4f} seconds')
        tic = time.perf_counter()

        print(f'{mode} load dv')
        print(f'len(df) = {len(df)}')
        with driver.session() as session:

          presignedCodebookURL = client.get_presigned_url('GET', bucket, codebook_file)
          print(presignedCodebookURL)

          # Load codebook
          query = f'''
            CALL apoc.load.csv($presignedCodebookURL, {{sep: ",", compression: "GZIP", header: false}}) YIELD lineNo, list, map
            MATCH (cd:CuratedDataset {{curatedDatasetID: $curatedDatasetID}})
            MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition {{ xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()}})'''
          # print(query)
          session.run(query, parameters={'curatedDatasetID': curatedDatasetID, 'presignedCodebookURL': presignedCodebookURL})

          if mode == 'programmatic':

            chunk_size = 1000
            chunk_counter = 0

            while chunk_counter < len(df):




              chunk_df = df[chunk_counter:chunk_counter+chunk_size]
              chunk_df_dict = chunk_df.to_dict(orient="records")
              chunk_counter += chunk_size
              print(f'NOW PROCESSING CHUNK: {chunk_counter}')





              # python joblib
              from joblib import Parallel, delayed
              def process(i, row_dict):
                with driver.session() as nestSession:
                  query = f'''
                    MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
                    CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
                    SET dv += $argsToUpdate
                    ;
                    '''
                  # print(i)
                  # print(query)
                  result = nestSession.run(query, parameters={'argsToUpdate': row_dict})
                
              results = Parallel(n_jobs=chunk_size, prefer='threads')(delayed(process)(i, row_dict) for i, row_dict in enumerate(chunk_df_dict))





              # # python sequential
              # for i, row_dict in enumerate(chunk_df_dict):
              #   if i >= limit:
              #     break
              #   query = f'''
              #     MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
              #     CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
              #     SET dv += $argsToUpdate
              #     ;
              #     '''
              #   # print(query)
              #   result = session.run(query, parameters={'argsToUpdate': row_dict})



              # # neo4j unwind
              # query = f'''
              #   MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
              #   UNWIND $argsToUpdate AS args
              #   CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
              #   SET dv += args
              #   ;
              #   '''
              # # print(query)
              # result = session.run(query, parameters={'argsToUpdate': chunk_df_dict})




              # # neo4j iterate
              # query = f'''
              #   CALL apoc.periodic.iterate('
              #   UNWIND $argsToUpdate AS args
              #   RETURN args
              #   '
              #   ,
              #   '
              #   MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
              #   CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
              #   SET dv += args
              #   ',
              #   {{batchSize:10000, iterateList:true, parallel:true, params:{{argsToUpdate: $argsToUpdate}}}}
              #   )
              #   YIELD batches, total, timeTaken, operations, updateStatistics
              #   RETURN batches, total, timeTaken, operations, updateStatistics;'''
              # print(query)
              # result = session.run(query, parameters={'argsToUpdate': chunk_df_dict})


              

          elif mode == 'neo4j':
            presignedURLRaw = client.get_presigned_url('GET', bucket, data_file)
            print(presignedURLRaw)

            query = f'''
                CALL apoc.periodic.iterate('
                CALL apoc.load.csv($presignedDataURL, {{sep: ",", compression: "GZIP", header: true}}) YIELD map
                RETURN map
                '
                ,
                '
                MATCH (cd: CuratedDataset {{curatedDatasetID: $curatedDatasetID}})
                CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: $curatedDatasetID, dataVariableID: apoc.create.uuid()}})
                SET dv += map
                ;',
                {{batchSize:10000, iterateList:true, parallel:true, params:{{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL}}}}
                )
                YIELD batches, total, timeTaken, operations, updateStatistics
                RETURN batches, total, timeTaken, operations, updateStatistics;'''

            result = session.run(query,
                {'curatedDatasetID': curatedDatasetID, 'presignedDataURL': presignedURLRaw}
              )

            # print(query)
          else:
            print(f'invalid mode: {mode}')

        time_counter += 1
        toc = time.perf_counter()
        print(f'{time_counter} in {toc - tic:0.4f} seconds')
        tic = time.perf_counter()

        print('Done')
    except Exception as err:
        print(err)