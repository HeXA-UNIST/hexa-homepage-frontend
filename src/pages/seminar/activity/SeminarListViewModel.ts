import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "@services/seminar/seminar_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class SeminarListViewModel extends PageViewModel {
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
    super();
    this.queryResult = SeminarsQueryResult.empty();

    this.seminarQueryOptions = {
      searchText: "",
      year: "",
      pageNum: 10,
      pageIndex: 0,
    };

    makeObservable(this);
  }

  setSeminarSuccess(queryResult: SeminarsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
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
      this.setSeminarSuccess(queryResult);
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

export default SeminarListViewModel;
