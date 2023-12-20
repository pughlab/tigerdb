import graphene

from .submit_run import SubmitRun

class Run(graphene.ObjectType):
    run_id = graphene.ID(required=True)
    datasets_ids = graphene.String()
    wes_id = graphene.ID(required=True)
    project_id = graphene.ID(required=True)
    status = graphene.String()
    created_on = graphene.DateTime()
    submitted_on = graphene.DateTime()


class Mutation(graphene.ObjectType):
    submit_run = SubmitRun.Field()
