export interface IMainPageServiceItem {
    serviceId: number;
    thumbnail: string;
    title: string;
    subTitle: string;
}

export default class MainPageServiceItem {
    serviceId: number;

    thumbnail: string;

    title: string;

    subTitle: string;

    constructor({ serviceId, thumbnail, title, subTitle }: IMainPageServiceItem) {
        this.serviceId = serviceId;
        this.thumbnail = thumbnail;
        this.title = title;
        this.subTitle = subTitle;
    }
}
