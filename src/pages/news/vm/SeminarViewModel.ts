import NewsQueryResult from "@models/news/NewsQueryResult";
import NewsRepository, {
    NewsQueryParams
} from "common/services/news/News_repository";
import { action, makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

export class NewsViewModel {
    @observable
    status: PageStatus;
    

    @observable
    NewsQueryResult: NewsQueryResult;

    
     constructor() {
        this.status = PageStatus.Loading;
        this.NewsQueryResult = NewsRepository.empty();

        makeObservable(this);

        this.search({
            searchText: "",
            year: "2023",
            pageNum: 20,
            page: 0
        });
    }

    @action
    async search(queryParams: NewsQueryParams) {
        try {
            const queryResult = await NewsRepository.queryNews(queryParams);

            this.status = PageStatus.Success;
            this.NewsQueryResult = queryResult;
        } catch (error) {
            this.status = PageStatus.Failed;
        }
    }
}
