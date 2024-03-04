export interface INews {
    // newsId: number;
    newsType: string;
    title: string;
    content: string;
    date: string;
}

export default class News {
    newsType: string;

    title: string;

    content: string;

    date: string;

    constructor({ newsType, title, content, date }: INews) {
        this.newsType = newsType;
        this.title = title;
        this.content = content;
        this.date = date;
    }

    static empty() {
        return new News({
            newsType: "공지",
            title: "title",
            content: "",
            date: "string",
        });
    }
}
