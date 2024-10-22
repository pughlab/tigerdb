import Docker from 'dockerode';

const docker = new Docker({ socketPath: '/var/run/docker.sock' });

export const dockerService = {
  docker: docker,

  getContainerId: async (runID: string): Promise<string | null> => {
    const containers = await docker.listContainers();

    // Find the container with a mount destination that includes the runID
    const matchingContainer = containers.find(container =>
      container.Mounts.some(mount => mount.Destination.includes(runID))
    );

    return matchingContainer ? matchingContainer.Id : null;
  },

  getLogs: async (Id: string | null): Promise<string | undefined> => {
    if (Id != null) {
      const logs = await docker.getContainer(Id).logs({ stdout: '1' });
      return logs.toString();
    }
  },

  killContainer: async (Id: string | null): Promise<string | undefined> => {
    if (Id != null) {
      const result = await docker.getContainer(Id).kill();
      return result.toString();
    }
  }
};


// const R = require('ramda')
// const Docker = require('dockerode')

// const docker = new Docker({ socketPath: '/var/run/docker.sock' });

// module.exports = {
//   docker: docker,

//   getContainerId: async runID => {
//     let containers = await docker.listContainers()

//     // Non-Ramda version
//     // let matchingContainerId = null;
//     // containers.forEach(container => {
//     //   container.Mounts.forEach(mount => {
//     //     if (mount.Destination.includes(runID)) {
//     //       matchingContainerId = container.Id;
//     //     }
//     //   })
//     // })

//     // Ramda approach
//     // mount-level predicate for checking if a mount destination includes runID (R.includes is point-free so works on both arrays/strings)
//     const mountDestinationIncludesRunID = mount => mount.Destination.includes(runID)
    
//     // use predicate above to define container-level predicate for checking if a container mount destination includes runID
//     const containerHasMountWithRunID = container => R.any(mountDestinationIncludesRunID, container.Mounts)
    
//     // use container-level predicate to find over all containers, then conditionally take the id prop if something is found otherwise return null
//     const matchingContainerId = R.compose(
//       R.ifElse(R.isNil, R.always(null), R.prop('Id')), //if find returns undefined then return null, otherwise get id prop
//       R.find(containerHasMountWithRunID)
//     )(containers)

//     return matchingContainerId;
//   },

//   getLogs: async Id => {
//     if (Id != null) {
//       return (await docker.getContainer(Id).logs({ 'stdout': '1' })).toString()
//     }
//   },

//   killContainer: async Id => {
//     if (Id != null){
//       return (await docker.getContainer(Id).kill()).toString()
//     }
//   }
// }