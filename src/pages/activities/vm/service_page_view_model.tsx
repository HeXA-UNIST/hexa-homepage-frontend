import ServicesQueryResult from "@models/service/ServicesQueryResult";
import ServiceRepository from "common/services/service/service_repository";
import { makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

class ServicePageViewModel {
  @observable
  status: PageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: ServicesQueryResult;

  
//   @observable
//   serviceQueryOptions: {
//     searchText: string;
//     year: string;
//     pageNum: number;
//     pageIndex: number;
//   };
  

  constructor() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = ServicesQueryResult.empty();
    
    // this.serviceQueryOptions = {
    //   searchText: "",
    //   year: "",
    //   pageNum: 10,
    //   pageIndex: 0,
    // };
    

    makeObservable(this);
  }

  setLoading() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
  }

  setSuccess(queryResult: ServicesQueryResult) {
    this.status = PageStatus.Success;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setFailed(errorMessage: string) {
    this.status = PageStatus.Failed;
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
      this.setSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
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
