export interface IServiceSummary {
    serviceId: number;
    thumbnail: number;
    title: string;
}

export default class ServiceSummary {
    serviceId: number;

    thumbnail: number;

    title: string;

    constructor(data: IServiceSummary) {
        this.serviceId = data.serviceId;
        this.thumbnail = data.thumbnail;
        this.title = data.title;
    }
}
