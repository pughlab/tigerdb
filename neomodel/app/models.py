from neomodel import (
    StructuredNode, StringProperty, UniqueIdProperty,
    DateTimeProperty, ArrayProperty, RelationshipFrom,
    IntegerProperty, FloatProperty,
    RelationshipTo
)
from datetime import datetime

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

logger = logging.getLogger(__name__)

class KeycloakUser(StructuredNode):
    __primarykey__ = 'keycloakUserID'

    keycloakUserID = UniqueIdProperty()
    email = StringProperty()
    name = StringProperty()
    # createdOn = DateTimeProperty()

    @classmethod
    def get_one_by_id(cls, keycloakUserID):
        return cls.nodes.get_or_none(keycloakUserID=keycloakUserID)

    def as_dict(self):
        return {
            'keycloakUserID': self.keycloakUserID,
            'email': self.email,
            'name': self.name,
        }
class Project(StructuredNode):
    __primarykey__ = 'projectID'

    projectID = UniqueIdProperty()
    name = StringProperty()
    description = StringProperty()
    createdBy = RelationshipTo('KeycloakUser', 'CREATED_BY')

    # createdOn = DateTimeProperty()

    @classmethod
    def get_one_by_id(cls, projectID):
        return cls.nodes.get_or_none(projectID=projectID)

    def as_dict(self):
        return {
            'projectID': self.projectID,
            'name': self.name,
            'description': self.description,
            # 'createdOn': self.createdOn.isoformat() if self.createdOn else None,
            # 'submitted_on': self.submitted_on
        }

class Dataset(StructuredNode):
    __primarykey__ = 'datasetID'

    datasetID = UniqueIdProperty()
    # projectID = UniqueIdProperty()
    name = StringProperty()
    description = StringProperty()
    project = RelationshipFrom('Project', 'HAS_DATASET')

class MinioUpload(StructuredNode):
    __primarykey__ = 'objectName'

    objectName = UniqueIdProperty()
    bucketName = UniqueIdProperty()
    filename = StringProperty()
    # dataset = RelationshipFrom('Dataset', 'HAS_FILE')
    run = RelationshipTo('Run', 'HAS_RUN')

    # @classmethod
    # def get_one_by_id(cls, objectName):
    #     return cls.nodes.get_or_none(objectName=objectName)

    def as_dict(self):
        return {
            'objectName': self.objectName,
            'bucketName': self.bucketName,
            'filename': self.filename,
        }
    
class RunParameters(StructuredNode):
    __primarykey__ = 'runID'

    runID = UniqueIdProperty()
    outPrefix = StringProperty()
    localMinpValue = FloatProperty()
    pDepth = IntegerProperty()
    globalConvergenceCutoff = IntegerProperty()
    simulationDepth = IntegerProperty()
    kmerMinDepth = IntegerProperty()
    localMinOVE = IntegerProperty()
    allAAInterchangeable = IntegerProperty()

    @classmethod
    def get_one_by_id(cls, runID):
        return cls.nodes.get_or_none(runID=runID)

    def as_dict(self):
        return {
            'runID': self.runID,
            'outPrefix': self.outPrefix,
            'localMinpValue': self.localMinpValue,
            'pDepth': self.pDepth,
            'globalConvergenceCutoff': self.globalConvergenceCutoff,
            'simulationDepth': self.simulationDepth,
            'kmerMinDepth': self.kmerMinDepth,
            'localMinOVE': self.localMinOVE,
            'allAAInterchangeable': self.allAAInterchangeable
        }
class Run(StructuredNode):
    __primarykey__ = 'runID'

    runID = UniqueIdProperty()
    wesID = UniqueIdProperty()
    # dataset_ids = ArrayProperty(StringProperty())
    # datasets = RelationshipFrom('Dataset', 'HAS_RUN')
    minioUploads = RelationshipFrom('MinioUpload', 'HAS_RUN')
    # wes_id = UniqueIdProperty()
    # project_id = UniqueIdProperty()
    name = StringProperty()
    status = StringProperty()
    # createdOn = DateTimeProperty()
    submittedOn = StringProperty()
    runParameters = RelationshipTo('RunParameters', 'HAS_PARAMETERS')

    @classmethod
    def get_one_by_id(cls ,runID):
        logger.debug(f"Fetching Run with ID: {runID}")
        run = cls.nodes.get_or_none(runID=runID)
        logger.debug(f"Run fetched: {run}")
        if run:
            logger.debug(f"Calling as_dict for Run {run.runID}")
            run_dict = run.as_dict()
            logger.debug(f"Run as dict: {run_dict}")
        return run


    def as_dict(self):
        logger.debug(f"Converting Run {self.runID} to dict")
        minio_uploads = [upload.as_dict() for upload in self.minioUploads.all()]
        logger.debug(f"MinioUploads for Run {self.runID}: {minio_uploads}")

        # Fetch a single RunParameters object and convert it to a dictionary if it exists
        run_parameters_obj = self.runParameters.single()
        run_parameters_dict = run_parameters_obj.as_dict() if run_parameters_obj else None
        logger.debug(f"RunParameters for Run {self.runID}: {run_parameters_dict}")
        # print(minio_uploads)
        return {
            'runID': self.runID,
            'wesID': self.wesID,
            # 'dataset_ids': self.dataset_ids,
            # 'datasets': self.datasets,
            # 'minioUploads': self.minioUploads,
            'minioUploads': minio_uploads,
            'runParameters': run_parameters_dict,
            # 'wes_id': self.wes_id,
            # 'project_id': self.project_id,
            'name': self.name,
            'status': self.status,
            # 'createdOn': self.createdOn.isoformat() if self.createdOn else None,
            'submittedOn': self.submittedOn
        }