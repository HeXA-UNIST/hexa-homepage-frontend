import MainPageNewsItem, {
    IMainPageNewsItem,
} from "@models/mainpage/MainPageNewsItem";
import MainPageServiceItem, {
    IMainPageServiceItem,
} from "@models/mainpage/MainPageServiceItem";

export interface IMainPageData {
    newsList: MainPageNewsItem[];
    serviceList: MainPageServiceItem[];
}

export default class MainPageData {
    newsList: MainPageNewsItem[];
    serviceList: MainPageServiceItem[];

    constructor({ newsList, serviceList }: IMainPageData) {
        this.newsList = newsList;
        this.serviceList = serviceList;
    }

    static fromJson(json: IMainPageData) {
        return new MainPageData({
            newsList: json.newsList.map((item: IMainPageNewsItem) =>
                MainPageNewsItem.fromJson(item)
            ),
            serviceList: json.serviceList.map((item: IMainPageServiceItem) =>
                MainPageServiceItem.fromJson(item)
            ),
        });
    }

    static empty() {
        return new MainPageData({ newsList: [], serviceList: [] });
    }
}
