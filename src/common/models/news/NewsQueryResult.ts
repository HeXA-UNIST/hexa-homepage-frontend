import Seminar from "./News";
import NewsSummary, { INewsSummary } from "./NewsSummary";

export interface NewsQueryType {
    news: INewsSummary[];
    page: number;
    maxPage: number;
}

export default class NewsQueryResult {
    news: NewsSummary[];

    page: number;

    maxPage: number;

    constructor({ news, page, maxPage }: NewsQueryType) {
        this.news = news.map((item: INewsSummary) => new NewsSummary(item));
        this.page = page;
        this.maxPage = maxPage;
    }

    static empty() {
        return new NewsQueryResult({
            news: [],
            page: 0,
            maxPage: 0,
        });
    }
}
