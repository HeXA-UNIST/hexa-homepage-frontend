import ProjectPageViewModel from "@pages/activities/vm/project_page_view_model";
import { action, makeObservable, observable } from "mobx";

export enum ActivityMode {
  Project = "Project",
  Seminar = "Seminar",
  Service = "Service",
}

export class ActivityViewModel {
  @observable
  mode: ActivityMode;

  @observable
  projectPageState: ProjectPageViewModel;

  constructor() {
    this.mode = ActivityMode.Project;
    this.projectPageState = new ProjectPageViewModel();

    makeObservable(this);
  }


  @action
  setMode(mode: ActivityMode) {
    this.mode = mode;
  }
}
