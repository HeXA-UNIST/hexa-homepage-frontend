import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "@services/seminar/seminar_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class SeminarListViewModel extends PageViewModel {
  @observable
  queryResult: SeminarsQueryResult;

  @observable
  seminarQueryOptions: {
    searchText: string;
    year: string;
    pageNum: number;
    perPage: number;
  };

  constructor() {
    super();
    
    makeObservable(this);
    this.queryResult = SeminarsQueryResult.empty();

    this.seminarQueryOptions = {
      searchText: "",
      year: "",
      pageNum: 1,
      perPage: 15,
    };

    this.setSeminarSuccess = this.setSeminarSuccess.bind(this);

    this.fetchSeminars();
  }

  @action
  setSeminarSuccess(queryResult: SeminarsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  @action
  fetchSeminars = async () => {
    this.setLoading();
    try {
      const queryResult = await SeminarRepository.querySeminars({
        pageNum: this.seminarQueryOptions.pageNum,
        perPage: this.seminarQueryOptions.perPage,
      });
      this.setSeminarSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  @action
  setSearchText = (searchText: string) => {
    this.seminarQueryOptions.searchText = searchText;
  }

  @action
  setYear = (year: string) => {
    this.seminarQueryOptions.year = year;
  }

  @action
  setPageNum = (pageNum: number) => {
    this.seminarQueryOptions.pageNum = pageNum;
  }

  @action
  setPerPage = (perPage: number) => {
    this.seminarQueryOptions.perPage = perPage;
  }
}

export default SeminarListViewModel;
