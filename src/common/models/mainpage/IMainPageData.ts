import IMainPageNewsItem from "common/models/mainpage/IMainPageNewsItem";

export default class IMainPageData {
  newsList: IMainPageNewsItem[];

  constructor(newsList: IMainPageNewsItem[]) {
    this.newsList = newsList;
  }

 static fromJson(json: { [key: string]: any }) {
    return new IMainPageData(
      json.newsList.map((item: any) => IMainPageNewsItem.fromJson(item))
    );
  }

  static empty() {
    return new IMainPageData([]);
  }
}
