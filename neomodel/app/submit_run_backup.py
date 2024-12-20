import datetime

import graphene

import app.schema as schema
from .models import Run as RunModel
# from .schema import Run



class SubmitRun(graphene.Mutation):
    class Arguments:
        run_id = graphene.ID()
        wes_id = graphene.ID()
        dataset_ids = graphene.List(graphene.String)
        project_id = graphene.ID()
    
    run = graphene.Field(lambda: schema.Run)

    def mutate(self, info, run_id, wes_id, dataset_ids, project_id):
        run = RunModel.get_one_by_id(run_id)
        if run: # run exists, update it
            run.wes_id = wes_id
            run.dataset_ids = dataset_ids
            run.project_id = project_id
            run.status = 'submitted'
            run.submitted_on = datetime.datetime.now()
        else: # new run, create it
            run = RunModel(
                wes_id=wes_id,
                dataset_ids=dataset_ids,
                project_id=project_id,
                status='pending'
            )
        run.save()
        return SubmitRun(run=schema.Run(**run.as_dict()))
