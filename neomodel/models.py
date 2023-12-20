from neomodel import (
    StructuredNode, StringProperty, UniqueIdProperty,
    DateTimeProperty
)


class Run(StructuredNode):
    run_id = UniqueIdProperty()
    datasets_ids = StringProperty()
    wes_id = UniqueIdProperty(required=True)
    project_id = UniqueIdProperty(required=True)
    status = StringProperty()
    created_on = DateTimeProperty(default_now=True)
    submitted_on = DateTimeProperty()

    @classmethod
    def get_one_by_id(cls ,run_id):
        return cls.nodes.get_or_none(run_id=run_id)