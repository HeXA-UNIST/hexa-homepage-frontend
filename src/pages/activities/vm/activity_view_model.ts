import ProjectPageViewModel from "@pages/activities/vm/project_page_view_model";
import SeminarPageViewModel from "@pages/activities/vm/seminar_page_view_model";
import ServicePageViewModel from "@pages/activities/vm/service_page_view_model";
import NewsPageViewModel from "@pages/activities/vm/news_page_view_model";

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

  @observable
  projectPageState: ProjectPageViewModel;

  @observable
  seminarPageState: SeminarPageViewModel;

  @observable
  servicePageState: ServicePageViewModel;

  @observable
  newsPageState: NewsPageViewModel;

  constructor() {
    this.mode = ActivityMode.Project;
    this.projectPageState = new ProjectPageViewModel();
    this.seminarPageState = new SeminarPageViewModel();
    this.servicePageState = new ServicePageViewModel();
    this.newsPageState = new NewsPageViewModel();
    makeObservable(this);
  }


  @action
  setMode(mode: ActivityMode) {
    this.mode = mode;
  }
}
