import MainPageData from "@models/mainpage/MainPageData";
import MainPageRepository from "common/services/mainpage/mainpage_repository";
import { action, makeObservable, observable } from "mobx";

export enum HomeStatus {
  Loading = "Loading",
  Failed = "Failed",
  Success = "Success",
}

export class HomeViewModel {
  @observable
  status: HomeStatus;

  @observable
  mainPageData: MainPageData;

  constructor() {
    this.status = HomeStatus.Loading;
    this.mainPageData = MainPageData.empty();

    makeObservable(this);

    this.load();
  }

  @action
  async load() {
    try {
      const mainPage = await MainPageRepository.getMainPageData();

      this.status = HomeStatus.Success;
      this.mainPageData = mainPage;
    } catch (error) {
      this.status = HomeStatus.Failed;
    }
  }
}
