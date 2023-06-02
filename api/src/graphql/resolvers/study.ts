import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {

  },
  Mutation: {
    createStudyWithTimeline: async (
      parent,
      {fullName, shortName, description, allowedStudies, allowedSites},
      { driver, ogm, minioClient, jwt }
    ) => {
      try {
        console.log(jwt)
        // const TimelineModel = ogm.model('Timeline')
        // const timelineInput = {
        //     name: shortName,
        //     timePoints: {create: [{node: {label: 'Birth', days: 0, weeks: 0, years: 0}}]}
        // }
        // const {timelines: [timeline]} = await TimelineModel.create({input: [timelineInput]})
        const timelineInput = {create: {node: {name: shortName, timePoints: {create: [{node: {label: 'Birth', days:0, weeks:0, years:0}}]}}}}
        const ontologyInput = {create: {node: {name: shortName}}}
        const studyInput = {fullName, shortName, description, allowedStudies, allowedSites, timeline: timelineInput, ontology: ontologyInput}
        const StudyModel = ogm.model('Study')
        const {studies: [study]} = await StudyModel.create({ input: [studyInput] })

        return study
      } catch (error) {
        console.log('createStudyWithTimeline', error)
        throw new ApolloError('createStudyWithTimeline', error)
      }
    },
  },

}