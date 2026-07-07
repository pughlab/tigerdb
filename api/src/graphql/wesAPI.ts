// import { RESTDataSource } from '@apollo/datasource-rest'
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
// import fetch from 'node-fetch';

export class WesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://${process.env.WES_SERVER}:${process.env.WES_PORT}`;
    this.memoizeGetRequests = false; // Disable memoization for debugging
    // this.fetch = fetch;
  }

  // Warning: Do not use this if the wesID does not exist because it will make an empty workflow
  async getStatus(wesID: string): Promise<any> {
    try {
      return this.get(`/ga4gh/wes/v1/runs/${encodeURIComponent(wesID)}/status`);
    } catch (error) {
      console.error('Error in getStatus:', error);
      throw new Error('Failed to fetch run status');
    }
  }

  async getRunData(wesID: string): Promise<any> {

    try {
      return this.get(`/ga4gh/wes/v1/runs/${encodeURIComponent(wesID)}`);
    } catch (error) {
      console.error('Error in getRunData:', error);
      throw new Error('Failed to fetch run data');
    }
  }

  // async cancelRun(runID: string): Promise<any> {
  //   return this.post(`/ga4gh/wes/v1/runs/${runID}/cancel`);
  // }

  // async getLogs(runID: string): Promise<any> {
  //   try {
  //     return this.get(`/ga4gh/wes/v1/runs/${runID}/logs`);
  //   } catch (error) {
  //     console.error('Error in getLogs:', error);
  //     throw new Error('Failed to fetch run logs');
  //   }
  // }

  // async getCompletedOn({
  //   isSecondaryRun = false,
  //   runID,
  //   state,
  //   submittedOnTime,
  //   wesID,
  // }: {
  //   isSecondaryRun?: boolean;
  //   runID: string;
  //   state: string;
  //   submittedOnTime: string;
  //   wesID: string;
  // }): Promise<any> {
  //   if (state === 'EXECUTOR_ERROR') {
  //     return this.get(
  //       `/ga4gh/wes/v1/runs/completed-on?state=${state}&wes_id=${wesID}`
  //     );
  //   } else {
  //     return this.get(
  //       `/ga4gh/wes/v1/runs/completed-on?is_secondary_run=${isSecondaryRun}&run_id=${runID}&state=${state}&submitted_on_time=${submittedOnTime}&wes_id=${wesID}`
  //     );
  //   }
  // }
}
