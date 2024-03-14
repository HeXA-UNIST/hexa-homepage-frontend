import NewsQueryResult from "@models/news/NewsQueryResult";
import NewsRepository from "common/services/news/news_repository";
import { makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

class NewsPageViewModel {
  @observable
  status: PageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: NewsQueryResult;

  
  @observable
  newsQueryOptions: {
    // searchText: string;
    // year: string;
    pageNum: number;
    perPage: number;
  };
  

  constructor() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = NewsQueryResult.empty();
    
    this.newsQueryOptions = {
      pageNum: 1,
      perPage: 10,
    };
    

    makeObservable(this);
  }

  setLoading() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
  }

  setSuccess(queryResult: NewsQueryResult) {
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
      const queryResult = await NewsRepository.queryNews(
        
        {
        pageNum: this.newsQueryOptions.pageNum,
        perPage: this.newsQueryOptions.perPage,
      }
      );
      this.setSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }
  
//   setSearchText(searchText: string) {
//     this.newsQueryOptions.searchText = searchText;
//   }

//   setYear(year: string) {
//     this.newsQueryOptions.year = year;
//   }

  setPageNum(pageNum: number) {
    this.newsQueryOptions.pageNum = pageNum;
  }

  setPageIndex(pageIndex: number) {
    this.newsQueryOptions.perPage = pageIndex;
  }
  
}

export default NewsPageViewModel;
