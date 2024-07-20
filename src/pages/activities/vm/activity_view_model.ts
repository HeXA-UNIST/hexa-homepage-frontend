import { action, makeObservable, observable } from "mobx";


export enum ActivityMode {
  Project = "Project",
  Seminar = "Seminar",
  Service = "Service",
  News = "News"
}

export class ActivityViewModel {
  @observable
  mode: ActivityMode;

  
  constructor() {
    this.mode = ActivityMode.Project;
    makeObservable(this);
  }


  @action
  setMode(mode: ActivityMode) {
    this.mode = mode;
  }
}
