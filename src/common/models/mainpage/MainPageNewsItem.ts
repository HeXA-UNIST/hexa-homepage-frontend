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
  }: {
    newsId: number;
    newsType: string;
    title: string;
    date: string;
  }) {
    this.newsId = newsId;
    this.newsType = newsType;
    this.title = title;
    this.date = date;
  }

  static fromJson(json: { [key: string]: any }) {
    return new MainPageNewsItem({
      newsId: json.newsId,
      newsType: json.newsType,
      title: json.title,
      date: json.date,
    });
  }
}
