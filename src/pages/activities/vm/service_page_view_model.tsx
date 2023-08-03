import ServicesQueryResult from "@models/service/ServicesQueryResult";
import ServiceRepository from "common/services/service/service_repository";
import { makeObservable, observable } from "mobx";

export enum ServicePageStatus {
  Loading = "Loading",
  Loaded = "Loaded",
  Error = "Error",
}

class ServicePageViewModel {
  @observable
  status: ServicePageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: ServicesQueryResult;

  /*
  @observable
  serviceQueryOptions: {
    searchText: string;
    year: string;
    pageNum: number;
    pageIndex: number;
  };
  */

  constructor() {
    this.status = ServicePageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = ServicesQueryResult.empty();
    /*
    this.serviceQueryOptions = {
      searchText: "",
      year: "",
      pageNum: 10,
      pageIndex: 0,
    };
    */

    makeObservable(this);
  }

  setLoading() {
    this.status = ServicePageStatus.Loading;
    this.errorMessage = "";
  }

  setLoaded(queryResult: ServicesQueryResult) {
    this.status = ServicePageStatus.Loaded;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setError(errorMessage: string) {
    this.status = ServicePageStatus.Error;
    this.errorMessage = errorMessage;
  }

  async fetchServices() {
    this.setLoading();
    try {
      const queryResult = await ServiceRepository.queryServices(
        /*
        {
        searchText:
          this.serviceQueryOptions.searchText.trim() !== ""
            ? this.serviceQueryOptions.searchText
            : undefined,
        year: this.serviceQueryOptions.year,
        pageNum: this.serviceQueryOptions.pageNum,
        page: this.serviceQueryOptions.pageIndex,
      }
      */);
      this.setLoaded(queryResult);
    } catch (e: any) {
      this.setError(e.message);
    }
  }
  /*
  setSearchText(searchText: string) {
    this.serviceQueryOptions.searchText = searchText;
  }

  setYear(year: string) {
    this.serviceQueryOptions.year = year;
  }

  setPageNum(pageNum: number) {
    this.serviceQueryOptions.pageNum = pageNum;
  }

  setPageIndex(pageIndex: number) {
    this.serviceQueryOptions.pageIndex = pageIndex;
  }
  */
}

export default ServicePageViewModel;
