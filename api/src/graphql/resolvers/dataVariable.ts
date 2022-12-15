import { listBucketObjects } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'


export const resolvers = {
    Query: {

    },
    Mutation: {
        createCuratedDatasetFromCSVCodebook: async (parent, { name, allowedStudy, allowedSite, rawDatasetID }, { driver, ogm, minioClient }) => {
            try {
                const RawDatasetModel = ogm.model("RawDataset")
                const DataVariableModel = ogm.model('DataVariable')
                const DataVariableFieldModel = ogm.model('DataVariableField')
                const DataVariableFieldDefinitionModel = ogm.model('DataVariableFieldDefinition')
                const DataVariableValueModel = ogm.model('DataVariableValue')
                const CuratedDatasetModel = ogm.model("CuratedDataset")
                
                const bucketName = `raw-dataset-${rawDatasetID}`

                const rawDataset = await RawDatasetModel.create({input:
                    {
                        name: name,
                        allowedStudies: [allowedStudy],
                        allowedSites: [allowedSite],
                        description: name,
                        minioBucket: {create: {node: {
                          bucketName: "raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20"
                        }}},
                        fromStudy: {connect: {where: {node: {fullName: name}}}},
                        studySite: {connect: {where: {node: {city: "Tokyo"}}}},
                    }
                })

                const {rawDatasetID: rawDSID, ...rawDSrest} = rawDataset['rawDatasets'][0]

                const curatedDataset = await CuratedDatasetModel.create({input:
                    {
                        name: name,
                        allowedStudies: [allowedStudy],
                        allowedSites: [allowedSite],
                        description: name,
                        generatedByRawDataset: {connect: {where: {node: {rawDatasetID: rawDSID}}}}
                    }
                })

                const {curatedDatasetID, ...curatedDatasetRest } = curatedDataset['curatedDatasets'][0]

                const bucketItemNames = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
                console.log(bucketItemNames)
                // From RD a69f105c-005a-46c1-9980-ffae7e2165df
                const rawCSV = 'rawdata_sample_3.csv.gz'
                const codebook = 'codebook_sample_3.csv.gz'

                const rawCSVStream = await minioClient.getObject(bucketName, rawCSV)
                const codebookStream = await minioClient.getObject(bucketName, codebook)
                // gunzip stream
                // const compressedFileStream = stream.pipe(zlib.createGunzip())
                const parseStream = async (stream: any) => {
                    let result = { meta: {}, data: [] }
                    return await new Promise((resolve, reject) => {
                        papa.parse(stream.pipe(zlib.createGunzip()), {
                            worker: true,
                            delimiter: ",",
                            step: (row) => {
                                result.data.push(row.data)
                            },
                            complete: () => {
                                resolve(result);
                            },
                            error: (err) => {
                                reject(err);
                            },
                        })
                    })
                }
                const rawResult: any = await parseStream(rawCSVStream)
                const codebookResult: any = await parseStream(codebookStream)
                // Turn codebook to map
                let codebookMap: any = new Map()
                for (const row of codebookResult.data) {
                    const [code, description, jsonSchema] = row
                    codebookMap.set(code, { description, jsonSchema })
                }
                console.log(codebookMap)
                // console.log(rawResult)
                const [rawCodeHeaders, ... rawRows] = rawResult.data
                const zip = (a, b) => a.map((k, i) => [k, b[i]]);
                let dataVariableIDs = []
                for (const row of rawRows) {
                    const zippedRow = zip(rawCodeHeaders, row)
                    // console.log(zippedRow)
                    let dataVariableInputFields = []
                    let dataVariableFieldIDs = []
                    for (const codeValue of zippedRow) {
                        const [code, value] = codeValue
                        // console.log(zippedRow, codebookMap[code], codebookMap['CHILDid'])
                        const codemapRef = codebookMap.get(code)
                        console.log(codemapRef)
                        const nodeDataVariableValue = {
                            allowedStudies: [allowedStudy],
                            allowedSites: [allowedSite],
                            value,
                        }
                        const nodeDataVariableFieldDefinition = {
                            allowedStudies: [allowedStudy],
                            allowedSites: [allowedSite],
                            xref: code,
                            description: codemapRef.description,
                            validationSchema: codemapRef.jsonSchema,
                        }
                        const nodeDataVariableField = {
                            allowedStudies: [allowedStudy],
                            allowedSites: [allowedSite],
                            description: codemapRef.description,
                            jsonSchema: codemapRef.jsonSchema,
                            code,
                        }
                        const nodeDataVariable = {
                            allowedStudies: [allowedStudy],
                            allowedSites: [allowedSite],
                        }

                        const dataVariableFieldDefinition = await DataVariableFieldDefinitionModel.create({input: {
                            ...nodeDataVariableFieldDefinition
                        }})
                        const {dataVariableFieldDefinitionID, ...dataVariableFieldDefinitionRest} = dataVariableFieldDefinition['dataVariableFieldDefinitions'][0]
                        const dataVariableValue = await DataVariableValueModel.create({
                            input: {
                                ...nodeDataVariableValue,
                                fromFieldDefinition: {connect: { where: { node: { dataVariableFieldDefinitionID }}}}
                            }
                        })
                        const {dataVariableValueID, ...dataVariableValueRest} = dataVariableValue['dataVariableValues'][0]
                        DataVariableFieldDefinitionModel.update({
                            where: { dataVariableFieldDefinitionID },
                            update: {
                                hasFieldValues: {
                                    connect: {
                                        where: {
                                            node: { dataVariableValueID }
                                        }
                                    }
                                }
                            }
                        })
                            hasFieldValues: {connect: {where: { node: { dataVariableValueID }}}}
                        const dataVariableField = await DataVariableFieldModel.create({input: {
                            ...nodeDataVariableField,
                            hasFieldDefinition: {connect: {where: { node: { dataVariableFieldDefinitionID }}}}
                        }})
                        const {dataVariableFieldID, ...dataVariableFieldRest} = dataVariableField['dataVariableFields'][0]
                        dataVariableFieldIDs.push(dataVariableFieldID)
                        
                    }
                    const { dataVariables: [dataVariable] } = await DataVariableModel.create({ input: [{
                        // fields: dataVariableInputFields,
                        allowedStudies: [allowedStudy],
                        allowedSites: [allowedSite],
                        // chromosome: "chr1",
                        // start: 1,
                        // end: 10,
                    }] })
                    console.log(dataVariable)
                    const { dataVariableID, ...dataVariableRest } = dataVariable
                    dataVariableIDs.push(dataVariableID)

                    await DataVariableModel.update({
                        where: { dataVariableID },
                        update: {
                            fields: {
                                connect: {
                                    where: {
                                        node: { dataVariableFieldID_IN: dataVariableFieldIDs }
                                    }
                                }
                            }
                        }
                    })
                }
        
                await CuratedDatasetModel.update({
                  where: { curatedDatasetID },
                  update: {
                    dataVariables: {
                        connect: {
                            where: {
                                node: { dataVariableID_IN: dataVariableIDs }
                            }
                        }
                    }}
                })
                return true
            } catch (error) {
                console.error(error)
                return new ApolloError('csv transform', error)
            }
        },
    },
}