import NewsSummary, { INewsSummary } from "./NewsSummary";

export interface NewsQueryType {
    list: INewsSummary[];
    totalPage: number;
}

export default class NewsQueryResult {
    news: NewsSummary[];

    totalPage: number;

    constructor({ list, totalPage }: NewsQueryType) {
        this.news = list.map((item: INewsSummary) => new NewsSummary(item));
        this.totalPage = totalPage;
    }

    static empty() {
        return new NewsQueryResult({
            list: [],
            totalPage: 0
        });
    }
}
