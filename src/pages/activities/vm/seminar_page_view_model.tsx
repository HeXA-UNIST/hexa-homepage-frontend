import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "common/services/seminar/seminar_repository";
import { makeObservable, observable } from "mobx";

export enum SeminarPageStatus {
  Loading = "Loading",
  Loaded = "Loaded",
  Error = "Error",
}

class SeminarPageViewModel {
  @observable
  status: SeminarPageStatus;

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
    this.status = SeminarPageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = SeminarsQueryResult.empty();

    this.seminarQueryOptions = {
      searchText: "",
      year: "2022",
      pageNum: 10,
      pageIndex: 0,
    };

    makeObservable(this);
  }

  setLoading() {
    this.status = SeminarPageStatus.Loading;
    this.errorMessage = "";
  }

  setLoaded(queryResult: SeminarsQueryResult) {
    this.status = SeminarPageStatus.Loaded;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setError(errorMessage: string) {
    this.status = SeminarPageStatus.Error;
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
      this.setLoaded(queryResult);
    } catch (e: any) {
      this.setError(e.message);
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
