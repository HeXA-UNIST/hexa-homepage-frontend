import NewsSummary, { INewsSummary } from "@models/news/NewsSummary";
import MainPageServiceItem, {
    IMainPageServiceItem,
} from "@models/service/MainPageServiceItem";

export interface IMainPageData {
    newsList: INewsSummary[];
    serviceList: IMainPageServiceItem[];
}

export default class MainPageData {
    newsList: NewsSummary[];

    serviceList: MainPageServiceItem[];

    constructor({ newsList, serviceList }: IMainPageData) {
        this.newsList = newsList.map(
            (item: INewsSummary) => new NewsSummary(item)
        );
        this.serviceList = serviceList.map(
            (item: IMainPageServiceItem) => new MainPageServiceItem(item)
        );
    }

    static empty() {
        return new MainPageData({ newsList: [], serviceList: [] });
    }
}
