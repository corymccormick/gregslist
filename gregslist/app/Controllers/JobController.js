import { ProxyState } from "../AppState.js";
import { jobService } from "../Services/JobService.js";


//Private
function _draw() {
  let jobs = ProxyState.jobs;
  let template = ''
  jobs.forEach(job => {
    console.log(job)
    template += job.Template
  })
  document.getElementById("jobs").innerHTML = template
}


//Public
export default class JobController {
  constructor() {
    ProxyState.on("jobs", _draw);
    _draw()
  }
}
