export interface INewsSummary {
    newsId: number;
    newsType: string;
    title: string;
    date: string;
}

export default class NewsSummary {
    newsId: number;

    newsType: string;

    title: string;

    date: string;

    constructor({ newsId, newsType, title, date }: INewsSummary) {
        this.newsId = newsId;
        this.newsType = newsType;
        this.title = title;
        this.date = date;
    }
}
