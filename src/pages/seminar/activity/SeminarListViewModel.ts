import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "@services/seminar/seminar_repository";
import { makeObservable, observable, action, flow } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class SeminarListViewModel extends PageViewModel {
  queryResult: SeminarsQueryResult;

  seminarQueryOptions: {
    searchText: string;
    year: string;
    pageNum: number;
    perPage: number;
  };

  constructor() {
    super();
    
    makeObservable(this, {
        queryResult: observable,
        seminarQueryOptions: observable,
        setSeminarSuccess: action,
        fetchSeminars: flow,
        setSearchText: action,
        setYear: action,
        setPageNum: action,
        setPerPage: action
    });
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

  setSeminarSuccess(queryResult: SeminarsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

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

  setSearchText = (searchText: string) => {
    this.seminarQueryOptions.searchText = searchText;
  }

  setYear = (year: string) => {
    this.seminarQueryOptions.year = year;
  }

  setPageNum = (pageNum: number) => {
    this.seminarQueryOptions.pageNum = pageNum;
  }

  setPerPage = (perPage: number) => {
    this.seminarQueryOptions.perPage = perPage;
  }
}

export default SeminarListViewModel;
