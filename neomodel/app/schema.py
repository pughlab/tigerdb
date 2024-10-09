import graphene

from .submit_run import SubmitRun
from .models import Run as RunModel

class Run(graphene.ObjectType):
    run_id = graphene.ID(required=True)
    dataset_ids = graphene.List(graphene.String)
    wes_id = graphene.ID(required=True)
    project_id = graphene.ID(required=True)
    status = graphene.String()
    created_on = graphene.DateTime()
    submitted_on = graphene.DateTime()


class Query(graphene.ObjectType):
    run = graphene.Field(Run, run_id=graphene.ID(required=True))

    def resolve_run(self, info, run_id):
        run = RunModel.get_one_by_id(run_id)
        if run:
            return run
        return None

class Mutation(graphene.ObjectType):
    submit_run = SubmitRun.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
