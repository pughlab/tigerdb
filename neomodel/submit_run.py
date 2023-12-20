import datetime

import graphene

from .models import Run


class SubmitRun(graphene.Mutation):
    class Arguments:
        wes_id = graphene.ID()
        dataset_ids = graphene.List(graphene.String)
        project_id = graphene.ID()
    
    run = graphene.Field(lambda: Run)

    def mutate(self, info, run_id, wes_id, dataset_ids, project_id):
        run = Run.get_one_by_id(run_id)
        if run: # run exists, update it
            run.wes_id = wes_id
            run.dataset_ids = dataset_ids
            run.project_id = project_id
            run.status = 'submitted'
            run.submitted_on = datetime.datetime.now()
        else: # new run, create it
            run = Run(
                wes_id=wes_id,
                dataset_ids=dataset_ids,
                project_id=project_id,
                status='pending'
            )
        run.save()
        return SubmitRun(run=run)
