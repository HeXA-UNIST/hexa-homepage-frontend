import IMainPageData from "@models/mainpage/MainPageData";
import MainPageRepository from "common/services/mainpage/mainpage_repository";
import { action, makeObservable, observable } from "mobx";

export enum ActivityStatus {
  Loading = "Loading",
  Failed = "Failed",
  Success = "Success",
}

export class ActivityViewModel {
  @observable
  status: ActivityStatus;

  @observable
  mainPageData: IMainPageData;

  constructor() {
    this.status = ActivityStatus.Loading;
    this.mainPageData = IMainPageData.empty();

    makeObservable(this);

    this.load();
  }

  @action
  async load() {
    try {
      const mainPage = await MainPageRepository.getMainPageData();

      this.status = ActivityStatus.Success;
      this.mainPageData = mainPage;
    } catch (error) {
      this.status = ActivityStatus.Failed;
    }
  }
}
