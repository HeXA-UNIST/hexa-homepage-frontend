import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "common/services/seminar/seminar_repository";
import { makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

class SeminarPageViewModel {
  @observable
  status: PageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: SeminarsQueryResult;

  @observable
  seminarQueryOptions: {
    searchText: string;
    year: string;
    pageNum: number;
    pageIndex: number;
  };

  constructor() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = SeminarsQueryResult.empty();

    this.seminarQueryOptions = {
      searchText: "",
      year: "",
      pageNum: 10,
      pageIndex: 0,
    };

    makeObservable(this);
  }

  setLoading() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
  }

  setSuccess(queryResult: SeminarsQueryResult) {
    this.status = PageStatus.Success;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setFailed(errorMessage: string) {
    this.status = PageStatus.Failed;
    this.errorMessage = errorMessage;
  }

  async fetchSeminars() {
    this.setLoading();
    try {
      const queryResult = await SeminarRepository.querySeminars({
        searchText:
          this.seminarQueryOptions.searchText.trim() !== ""
            ? this.seminarQueryOptions.searchText
            : undefined,
        year: this.seminarQueryOptions.year,
        pageNum: this.seminarQueryOptions.pageNum,
        page: this.seminarQueryOptions.pageIndex,
      });
      this.setSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  setSearchText(searchText: string) {
    this.seminarQueryOptions.searchText = searchText;
  }

  setYear(year: string) {
    this.seminarQueryOptions.year = year;
  }

  setPageNum(pageNum: number) {
    this.seminarQueryOptions.pageNum = pageNum;
  }

  setPageIndex(pageIndex: number) {
    this.seminarQueryOptions.pageIndex = pageIndex;
  }
}

export default SeminarPageViewModel;
