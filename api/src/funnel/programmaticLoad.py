from neo4j import GraphDatabase
from minio import Minio
# from minio.error import ResponseError
import gzip
import pandas as pd
from io import StringIO
import time
import sys
from dotenv import dotenv_values
import uuid

if __name__ == "__main__":


    if len(sys.argv) != 8:
      print(f'''Expected 7 arguments (got {len(sys.argv)})!)
      
      e.g. python -m debugpy --wait-for-client --listen 5678 api/src/funnel/programmaticLoad.py 7ec33aac-9209-4948-8804-8cc115bc8b20 "Data-Table 1.csv.gz" "Code Book-Table 1.csv.gz" neo4j 111222,111222,111333 111aaa,111bbb,333aaa
      
      e.g. python api/src/funnel/programmaticLoad.py 7ec33aac-9209-4948-8804-8cc115bc8b20 "Data-Table 1.csv.gz" "Code Book-Table 1.csv.gz" neo4j 111222,111222,111333 111aaa,111bbb,333aaa

      e.g. npx nodemon --watch api/src/funnel/programmaticLoad.py --exec "python -m debugpy --wait-for-client --listen 5678" api/src/funnel/programmaticLoad.py 7ec33aac-9209-4948-8804-8cc115bc8b20 "rawdata_sample_4.csv.gz" "codebook_sample_3.csv.gz" neo4j %permission_allowedSites,%permission_allowedSites,%permission_allowedStudies Vancouver,Toronto,Milk ydelall|ndelall

      e.g. python api/src/funnel/programmaticLoad.py 6cf31f33-1696-48cf-97d2-3cd4cec2e1e3 "rawdata_sample_4.csv.gz" "codebook_sample_4.csv.gz" neo4j %permission_allowedSites,%permission_allowedSites,%permission_allowedStudies Vancouver,Toronto,Milk ydelall|ndelall

      e.g. npx nodemon --watch api/src/funnel/programmaticLoad.py --exec "python -m debugpy --wait-for-client --listen 5678" api/src/funnel/programmaticLoad.py 6cf31f33-1696-48cf-97d2-3cd4cec2e1e3 0027aa5d-9a0f-40f1-b7e6-7e070953acc7 802d6267-1b27-42c6-ac8f-cad7d3ab4d70 neo4j %permission_allowedSites,%permission_allowedSites,%permission_allowedStudies Vancouver,Toronto,Milk ydelall|ndelall

      ''')
      exit(1)

    config = dotenv_values()

    tic = time.perf_counter()
    uri = config['NEO4J_URI']
    user = config['NEO4J_USER']
    password = config['NEO4J_PASSWORD']

    minio_host = config['MINIO_IP']
    minio_port = config['MINIO_API_PORT']
    minio_external_port = config['MINIO_EXTERNAL_PORT']
    minio_access_key = config['MINIO_ROOT_USER']
    minio_secret_key = config['MINIO_ROOT_PASSWORD']

    driver = GraphDatabase.driver(uri, auth=(user, password))
    curatedDatasetID = str(uuid.uuid4())
    rawDatasetID = sys.argv[1]
    # rawDatasetID = '7ec33aac-9209-4948-8804-8cc115bc8b20'
    bucket = f'raw-dataset-{rawDatasetID}'

    data_file = sys.argv[2]
    # data_file = 'rawdata_sample_4.csv.gz'
    # data_file = 'Data-Table 1.csv.gz'
    # data_file = 'test3m.bedgraph.gz'

    # codebook_file = "codebook_sample_3.csv.gz"
    codebook_file = sys.argv[3]

    mode = sys.argv[4]
    # mode = 'programmatic'
    # mode = 'neo4j'

    properties = sys.argv[5]
    # properties = '%allowedSites,%allowedSites,%allowedStudies'
    values = sys.argv[6]
    # values = 'Vancouver,Toronto,Milk'

    isdelall = sys.argv[7]

    properties_split = properties.split(',')
    values_split = values.split(',')

    if len(properties_split) != len(values_split):
      print(f'''
      Arguments 5 and 6 must be comma separated strings that are the same length.
      ''')
      exit(1)


    permissions_map = {}
    for prop, val in zip(properties_split, values_split):
      if prop == '':
        continue
      if prop not in permissions_map:
        permissions_map[prop] = []
      permissions_map[prop].append(val)

    permissions_codebook = {'%permission_codebook': list(permissions_map.keys())}

    # limit = 5
    # limit = 1200
    # limit = 10000
    # limit = 100000

    print()
    print(f'minio_host = {minio_host}')
    print()
    print(f'rawDatasetID = {rawDatasetID}')
    print(f'data_file = {data_file}')
    print(f'codebook_file = {codebook_file}')
    print(f'mode = {mode}')
    # print(f'limit = {limit}')
    print()

    time_counter = 0

    time_counter += 1
    toc = time.perf_counter()
    print(f'{time_counter} in {toc - tic:0.4f} seconds')
    tic = time.perf_counter()

    with driver.session() as session:

      if isdelall == 'ydelall':

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

      result = session.run(f'''
                            MATCH (m:RawDataset {{rawDatasetID: "{rawDatasetID}"}})
                            MERGE (m)-[:GENERATED_CURATED_DATASET]->(n:CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
                            SET n += $permissions_map
                            SET n += $permissions_codebook
                            ''', parameters={'permissions_map': permissions_map, 'permissions_codebook': permissions_codebook})
      # print(result.single())
      time_counter += 1
      toc = time.perf_counter()
      print(f'{time_counter} in {toc - tic:0.4f} seconds')
      tic = time.perf_counter()

    client = Minio(f'{minio_host}:{minio_external_port}',
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
            MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition {{ xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()}})
            SET dvfd += $permissions_map;
            '''
          # print(query)
          session.run(query, parameters={'curatedDatasetID': curatedDatasetID, 'presignedCodebookURL': presignedCodebookURL, 'permissions_map': permissions_map})

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
                    SET dv += $permissions_map
                    ;
                    '''
                  # print(i)
                  # print(query)
                  result = nestSession.run(query, parameters={'argsToUpdate': row_dict, 'permissions_map': permissions_map})
                
              results = Parallel(n_jobs=chunk_size, prefer='threads')(delayed(process)(i, row_dict) for i, row_dict in enumerate(chunk_df_dict))





              # # python sequential
              # for i, row_dict in enumerate(chunk_df_dict):
              #   if i >= limit:
              #     break
              #   query = f'''
              #     MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
              #     CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
              #     SET dv += $argsToUpdate
              #     SET dv += $permissions_map
              #     ;
              #     '''
              #   # print(query)
              #   result = session.run(query, parameters={'argsToUpdate': row_dict, 'permissions_map': permissions_map})



              # # neo4j unwind
              # query = f'''
              #   MATCH (cd: CuratedDataset {{curatedDatasetID: "{curatedDatasetID}"}})
              #   UNWIND $argsToUpdate AS args
              #   CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {{curatedDatasetID: "{curatedDatasetID}", dataVariableID: apoc.create.uuid()}})
              #   SET dv += args
              #   SET dv += $permissions_map
              #   ;
              #   '''
              # # print(query)
              # result = session.run(query, parameters={'argsToUpdate': chunk_df_dict, 'permissions_map': permissions_map})




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
              #   SET dv += $permissions_map
              #   ',
              #   {{batchSize:10000, iterateList:true, parallel:true, params:{{argsToUpdate: $argsToUpdate, permissions_map: $permissions_map}}}}
              #   )
              #   YIELD batches, total, timeTaken, operations, updateStatistics
              #   RETURN batches, total, timeTaken, operations, updateStatistics;'''
              # print(query)
              # result = session.run(query, parameters={'argsToUpdate': chunk_df_dict, 'permissions_map': permissions_map})


              

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
                SET dv += $permissions_map
                ;',
                {{batchSize:10000, iterateList:true, parallel:true, params:{{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, permissions_map: $permissions_map}}}}
                )
                YIELD batches, total, timeTaken, operations, updateStatistics
                RETURN batches, total, timeTaken, operations, updateStatistics;'''

            result = session.run(query,
                {'curatedDatasetID': curatedDatasetID, 'presignedDataURL': presignedURLRaw, 'permissions_map': permissions_map}
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