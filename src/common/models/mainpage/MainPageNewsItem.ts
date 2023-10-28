
export interface IMainPageNewsItem{
    newsId: number;
    newsType: string;
    title: string;
    date: string;
}

export default class MainPageNewsItem {
  newsId: number;

  newsType: string;

  title: string;

  date: string;

  constructor({
    newsId,
    newsType,
    title,
    date,
  }: IMainPageNewsItem) {
    this.newsId = newsId;
    this.newsType = newsType;
    this.title = title;
    this.date = date;
  }

  static fromJson(json: IMainPageNewsItem) {
    return new MainPageNewsItem({
      newsId: json.newsId,
      newsType: json.newsType,
      title: json.title,
      date: json.date,
    });
  }
}
