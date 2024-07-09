import News from "@models/news/News";
import NewsRepository from "@services/news/news_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class NewsDetailViewModel extends PageViewModel{
    newsId: number;

    newsDetail: News;

    constructor(){
        super();
        makeObservable(this, {
            newsId: observable,
            newsDetail: observable,
            setNewsDetailSuccess: action,
            fetchNews: action,
            setNewsId: action
        });

        this.newsId = 0;
        this.newsDetail = News.empty();

        
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