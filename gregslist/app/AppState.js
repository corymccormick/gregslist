import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Job[]} */
  jobs = [
    new Job('Banker', 'money handler', '10 galleons/week', 'Gringots Corp'),
    new Job('Auror', 'take care of mischevious witches/ wizards', '8 galleons/week', 'Ministry of Magic'),
    new Job('Barkeep', 'upkeep the bar while tending to patrons', '3 galleons/week +tips', 'Three Broomsticks'),
    new Job('Grounds Keeper Asst.', 'upkeep of grounds', '3 galleons/week', 'Hogwarts'),
    new Job('Security Enchanter', 'grant protection security to clients', '5 galleons/week', 'Prune Protections')
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
