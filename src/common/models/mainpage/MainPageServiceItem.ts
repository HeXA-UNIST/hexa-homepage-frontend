export interface IMainPageServiceItem {
    serviceId: number;
    thumbnail: string;
    title: string;
}

export default class MainPageServiceItem {
    serviceId: number;

    thumbnail: string;

    title: string;

    constructor({ serviceId, thumbnail, title }: IMainPageServiceItem) {
        this.serviceId = serviceId;
        this.thumbnail = thumbnail;
        this.title = title;
    }

    static fromJson(json: IMainPageServiceItem) {
        return new MainPageServiceItem({
            serviceId: json.serviceId,
            thumbnail: json.thumbnail,
            title: json.title,
        });
    }
}
