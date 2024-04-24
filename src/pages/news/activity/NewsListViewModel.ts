import NewsQueryResult from "@models/news/NewsQueryResult";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class NewsListViewModel extends PageViewModel {
    @observable
    queryResult: NewsQueryResult;

    @observable
    newsQueryOptions: {
        pageNum: number;
        perPage: number;
    };

    constructor() {
        super();
        
        makeObservable(this);

        this.queryResult = NewsQueryResult.empty();
        this.newsQueryOptions = {
            pageNum: 1,
            perPage: 15,
        };
        
        this.setNewsSuccess = this.setNewsSuccess.bind(this);

        this.fetchServices();
    }

    @action
    setNewsSuccess(queryResult: NewsQueryResult) {
        super.setSuccess();
        this.queryResult = queryResult;
    }

    @action
    fetchServices = async () => {
        this.setLoading();
        try {
            const queryResult = await NewsRepository.queryNews({
                pageNum: this.newsQueryOptions.pageNum,
                perPage: this.newsQueryOptions.perPage,
            });
            this.setNewsSuccess(queryResult);
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

    @action
    setPageNum = (pageNum: number) => {
        this.newsQueryOptions.pageNum = pageNum;
    }

    @action
    setPerPage = (perPage: number) => {
        this.newsQueryOptions.perPage = perPage;
        this.fetchServices();
    }
}

export default NewsListViewModel;
