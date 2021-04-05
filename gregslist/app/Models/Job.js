import { generateId } from "../Utils/GenerateId.js"

export default class Job {
  constructor(title, description, rate, company) {
    this.id = generateId()
    this.title = title
    this.description = description
    this.rate = rate
    this.company = company
  }

  get Template() {

    return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
            <div class="card-body">
                <h4 class="card-title">${this.title} </h4>
                <p class="card-text">${this.description} - ${this.rate} - ${this.company}</p>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
      </div>
      `
  }
}
