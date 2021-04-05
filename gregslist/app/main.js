import JobController from "./Controllers/JobController.js";

class App {
  jobController = new JobController();
}

window["app"] = new App();
