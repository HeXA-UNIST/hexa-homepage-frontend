import NewsQueryResult from "@models/news/NewsQueryResult";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class NewsListViewModel extends PageViewModel {
    queryResult: NewsQueryResult;

    newsQueryOptions: {
        pageNum: number;
        perPage: number;
    };

    constructor() {
        super();
        
        makeObservable(this, {
            queryResult: observable,
            newsQueryOptions: observable,
            setNewsSuccess: action,
            fetchServices: action,
            setPageNum: action,
            setPerPage: action
        });

        this.queryResult = NewsQueryResult.empty();
        this.newsQueryOptions = {
            pageNum: 0,
            perPage: 15,
        };
        
        this.setNewsSuccess = this.setNewsSuccess.bind(this);

        this.fetchServices();
    }

    setNewsSuccess(queryResult: NewsQueryResult) {
        super.setSuccess();
        this.queryResult = queryResult;
    }

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

    setPageNum = (pageNum: number) => {
        this.newsQueryOptions.pageNum = pageNum;
        this.fetchServices();
    }

    setPerPage = (perPage: number) => {
        this.newsQueryOptions.perPage = perPage;
        this.fetchServices();
    }
}

export default NewsListViewModel;
