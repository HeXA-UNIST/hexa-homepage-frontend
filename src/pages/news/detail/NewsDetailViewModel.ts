import News from "@models/news/News";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

class NewsDetailViewModel{
    @observable
    status: PageStatus;

    @observable
    newsDetail: News;

    constructor(){
        this.status = PageStatus.Loading;
        this.newsDetail = News.empty();

        makeObservable(this);
    }


}

export default NewsDetailViewModel;