import graphene

from .submit_run import SubmitRun
from .models import Run as RunModel

class Dataset(graphene.ObjectType):
    datasetID = graphene.ID(required=True)
    name = graphene.String()
    description = graphene.String()

class MinioUpload(graphene.ObjectType):
    objectName = graphene.ID(required=True)
    bucketName = graphene.ID(required=True)
    filename = graphene.String()

class RunParameters(graphene.ObjectType):
    runID = graphene.ID(required=True)
    outPrefix = graphene.String()
    localMinpValue = graphene.Float()
    pDepth = graphene.Int()
    globalConvergenceCutoff = graphene.Int()
    simulationDepth = graphene.Int()
    kmerMinDepth = graphene.Int()
    localMinOVE = graphene.Int()
    allAAInterchangeable = graphene.Int()

class Run(graphene.ObjectType):
    runID = graphene.ID(required=True)
    wesID = graphene.ID()
    # dataset_ids = graphene.List(graphene.String)
    # wes_id = graphene.ID(required=True)
    # project_id = graphene.ID(required=True)
    name = graphene.String()
    status = graphene.String()
    # datasets = graphene.List(Dataset)
    minioUploads = graphene.List(MinioUpload)
    # createdOn = graphene.DateTime()
    runParameters = graphene.Field(RunParameters)
    submittedOn = graphene.String()

class Query(graphene.ObjectType):
    run = graphene.Field(Run, runID=graphene.ID(required=True))

    def resolve_run(self, info, runID):
        run = RunModel.get_one_by_id(runID)
        return run

class Mutation(graphene.ObjectType):
    submit_run = SubmitRun.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
