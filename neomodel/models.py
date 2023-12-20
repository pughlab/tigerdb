from neomodel import (
    StructuredNode, StringProperty, UniqueIdProperty,
    DateTimeProperty
)


class Run(StructuredNode):
    __primarykey__ = 'run_id'

    run_id = UniqueIdProperty()
    dataset_ids = StringProperty()
    wes_id = UniqueIdProperty(required=True)
    project_id = UniqueIdProperty(required=True)
    status = StringProperty()
    created_on = DateTimeProperty(default_now=True)
    submitted_on = DateTimeProperty()

    @classmethod
    def get_one_by_id(cls ,run_id):
        return cls.nodes.get_or_none(run_id=run_id)

    def as_dict(self):
        return {
            'run_id': self.run_id,
            'dataset_ids': self.dataset_ids,
            'wes_id': self.wes_id,
            'project_id': self.project_id,
            'status': self.status,
            'created_on': self.created_on,
            'submitted_on': self.submitted_on
        }