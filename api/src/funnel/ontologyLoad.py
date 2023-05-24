import pandas as pd
import numpy as np
import requests
import json
import pprint
from dotenv import dotenv_values

config = dotenv_values()
auth_token = config['AUTHTOKEN']

f = './inputs/IMiC Data Harmonization Spec_Master (2).xlsx'
df = pd.read_excel(f, sheet_name=1)
df = df.drop(
  [
    'Format',
    'VITAL-LACTATION',
    'ELICIT',
    'MISAME-3',
    'CHILD',
  ], axis=1)
df = df.rename(columns = {
    'VarName':'varName',
    'VARLABEL':'varLabel',
    'VARDESCRIPTION':'varDescription',
    'VARTYPE':'varType',
    'RELATE':'relate',
    'Longitudinal?':'longitudinal',
    'Essential?':'essential',
    'LENGTH':'length',
    'DECIMAL':'decimal',
    'Programming Note':'programmingNote',
    'Additional Note':'additionalNote',

})

df.varType = df.varType.replace('char', 'CHARACTER')
df.varType = df.varType.replace('num', 'NUMERIC')
df.varType = df.varType.replace('integer', 'INTEGER')

df.longitudinal = df.longitudinal.replace('no', False)
df.longitudinal = df.longitudinal.replace('No', False)
df.longitudinal = df.longitudinal.replace('yes', True)
df.longitudinal = df.longitudinal.replace('Yes', True)
df.longitudinal = df.longitudinal.replace(np.nan, None)

df.essential = df.essential.replace('no', False)
df.essential = df.essential.replace('No', False)
df.essential = df.essential.replace('yes', True)
df.essential = df.essential.replace('Yes', True)
df.essential = df.essential.replace(np.nan, None)

def toInt(x):
  try:
    return int(x)
  except ValueError:
    return None

df.relate = df.relate.apply(toInt)
df.length = df.length.apply(toInt)
df.decimal = df.decimal.apply(toInt)

df.longitudinal = df.longitudinal.astype('boolean')
df.essential = df.essential.astype('boolean')


category_name = 'General'
data = {category_name: []}
data_flat = {'OntologyConceptsCreateFieldInput': []}

for i, row in enumerate(df.iterrows()):
    # if i > 10:
    #     break
    row_list = row[1].to_list()
    row_dict = row[1][pd.notnull(row[1])].to_dict()

    name = row_list[0]
    rest = row_list[1:]
    type(rest[5])
    is_category = np.all(pd.isna(rest))
    
    if is_category:
        category_name = name
        data[category_name] = []
    else:
        data[category_name].append(row_dict)

        row_dict['category'] = category_name
        data_flat['OntologyConceptsCreateFieldInput'].append({'node': {'type': 'COLLECTED', 'properties': {'create': {'node': row_dict}}}})

query = 'query{studies {studyID fullName}}'
query = '''
mutation ($OntologyConceptsCreateFieldInput: [OntologyConceptsCreateFieldInput!]) {
  createOntologies(input: {
    name: "imic",
    concepts: {create: $OntologyConceptsCreateFieldInput}
  }) {
    info {
      nodesCreated
    }
    ontologies {
      id
      name
      concepts {
        properties {
          id
          varName
          varLabel
          category
        }
        type
      }
    }
  }
}
'''
url = 'https://localhost/graphql/'
headers = {'Authorization': f'Bearer {auth_token}'}
r = requests.post(url, json={'query': query, 'variables': data_flat}, verify=False, headers=headers)
print(r.status_code)
print(r.text)
pprint.pprint(json.loads(r.text))



json.dumps(data_flat)