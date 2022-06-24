const fetch = require("node-fetch")

const gqlfetch = async ({ query, variables, authorization=null }: { query: any, variables: any, authorization?: any}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': authorization
    }

    const f = await fetch('http://localhost:4001/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables
      })
    })

    const response = await f.json()
    console.log('\n\n\n\n>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(response, null, 4) + '\n\n\n\n')
    return await response
  } catch (e) {
    console.log(e)
  }
}

export const runOnLoad = async () => {
  await gqlfetch({ query: `mutation {delete}`, variables: {} })
  // await gqlfetch({ query: `mutation {load}`, variables: {} })
  // await gqlfetch({ query: `mutation {load}`, variables: {} })
  // await gqlfetch({ query: `mutation {load2}`, variables: {} })
  await gqlfetch({ query: `mutation {load3(Filename: "asdfff")}`, variables: {Filename: 'asdf'} })
  // await gqlfetch({ query: `{ SampleGroup {sampleGroupName sampleData {sampleDatumName}}}`, variables: {} })
  // await gqlfetch({ query: `{ Subject(first: 1) { subjectId sample {sampleDatum {sampleDatumName} sampleValue }}}`, variables: {} })
}