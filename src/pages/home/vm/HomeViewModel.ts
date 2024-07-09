import MainPageData from "@models/mainpage/MainPageData";
import MainPageRepository from "common/services/mainpage/mainpage_repository";
import { action, makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";


export class HomeViewModel {
  @observable
  status: PageStatus;

  
  @observable
  mainPageData: MainPageData;

  constructor() {
    this.status = PageStatus.Loading;
    this.mainPageData = MainPageData.empty();

    makeObservable(this);

    this.load();
  }

  @action
  async load() {
    try {
      const mainPage = await MainPageRepository.getMainPageData();

      this.status = PageStatus.Success;
      this.setMainPageData(mainPage);
    } catch (error) {
      this.status = PageStatus.Failed;
    }
  }

  @action
  setMainPageData(mainPage: MainPageData){
    this.mainPageData = mainPage;
  } 
}
