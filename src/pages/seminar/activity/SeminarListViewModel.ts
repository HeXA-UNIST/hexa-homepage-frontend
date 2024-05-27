import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository from "@services/seminar/seminar_repository";
import { makeObservable, observable, action } from "mobx";
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
        fetchSeminars: action,
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

    this.fetchSeminars();
  }

  setSeminarSuccess(queryResult: SeminarsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  fetchSeminars = async () => {
    this.setLoading();
    try {
        const query = {
            serchText: this.seminarQueryOptions.searchText?.trim() !== ""
            ? this.seminarQueryOptions.searchText
            : undefined,
            year: this.seminarQueryOptions.year,
            pageNum: this.seminarQueryOptions.pageNum,
            perPage: this.seminarQueryOptions.perPage,
          };
          console.log(query);
      const queryResult = await SeminarRepository.querySeminars(query);
      this.setSeminarSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  setSearchText = (searchText: string) => {
    this.seminarQueryOptions.searchText = searchText;
    this.fetchSeminars();
  }

  setYear = (year: string) => {
    console.error("seminar set year", year);
    this.seminarQueryOptions.year = year;
    this.fetchSeminars();
  }

  setPageNum = (pageNum: number) => {
    this.seminarQueryOptions.pageNum = pageNum;
    this.fetchSeminars();
  }

  setPerPage = (perPage: number) => {
    this.seminarQueryOptions.perPage = perPage;
    this.fetchSeminars();
  }
}

export default SeminarListViewModel;
