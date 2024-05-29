export interface IMainPageServiceItem {
    serviceId: number;
    thumbnail: number;
    title: string;
}

export default class MainPageServiceItem {
    serviceId: number;

    thumbnail: number;

    title: string;

    constructor({ serviceId, thumbnail, title }: IMainPageServiceItem) {
        this.serviceId = serviceId;
        this.thumbnail = thumbnail;
        this.title = title;
    }
}
