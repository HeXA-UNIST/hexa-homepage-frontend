export default class IMainPageNewsItem {
  newsId: number;

  newsType: string;

  title: string;

  date: string;

  constructor(newsId: number, newsType: string, title: string, date: string) {
    this.newsId = newsId;
    this.newsType = newsType;
    this.title = title;
    this.date = date;
  }

  static fromJson(json: { [key: string]: any }) {
    return new IMainPageNewsItem(
      json.newsId,
      json.newsType,
      json.title,
      json.date
    );
  }
}
