import { ProxyState } from "../AppState.js";
import Job from "../Models/jobs.js";

class JobService {
  addJob(newJob) {
    let job = new Job(newJob.title, newJob.description, newJob.rate, newJob.company)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
}

export const jobService = new JobService();

