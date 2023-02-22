import MainPageNewsItem from "@models/mainpage/MainPageNewsItem";

export default class MainPageData {
  newsList: MainPageNewsItem[];

  constructor({ newsList }: { newsList: MainPageNewsItem[] }) {
    this.newsList = newsList;
  }

  static fromJson(json: { [key: string]: any }) {
    return new MainPageData({
      newsList: json.newsList.map((item: any) =>
        MainPageNewsItem.fromJson(item)
      ),
    });
  }

  static empty() {
    return new MainPageData({ newsList: [] });
  }
}
