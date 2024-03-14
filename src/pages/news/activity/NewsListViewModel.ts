import NewsQueryResult from "@models/news/NewsQueryResult";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable } from "mobx";
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
        this.queryResult = NewsQueryResult.empty();
        this.newsQueryOptions = {
            pageNum: 1,
            perPage: 10,
        };

        makeObservable(this);
    }

    setNewsSuccess(queryResult: NewsQueryResult) {
        super.setSuccess();
        this.queryResult = queryResult;
    }

    async fetchServices() {
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

    setPageNum(pageNum: number) {
        this.newsQueryOptions.pageNum = pageNum;
    }

    setPageIndex(pageIndex: number) {
        this.newsQueryOptions.perPage = pageIndex;
    }
}

export default NewsListViewModel;
