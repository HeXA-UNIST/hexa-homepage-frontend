import News from "@models/news/News";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class NewsDetailViewModel extends PageViewModel{
    @observable
    newsId: number;

    @observable
    newsDetail: News;

    constructor(){
        super();
        this.newsId = 0;
        this.newsDetail = News.empty();

        makeObservable(this);
    }

    setNewsDetailSuccess(newsDetail: News){
        super.setSuccess();
        this.newsDetail = newsDetail;
    }


    async fetchNews(){
        this.setLoading();
        try{
            const newsDetail = await NewsRepository.getNewsById(this.newsId);
            this.setNewsDetailSuccess(newsDetail);
        } catch(e: any){
            this.setFailed(e.message);
        }
    }

    setNewsId(newsId: number){
        this.newsId = newsId;
        this.fetchNews();
    }

}

export default NewsDetailViewModel;