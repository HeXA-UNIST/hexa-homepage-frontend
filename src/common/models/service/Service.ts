export interface IService {
    // serviceId: number;
    // name: string;
    title: string;
    thumbnail: number;
    content: string;
    siteLink: string;
    githubLink: string;
}

export default class Service {
    title: string;

    thumbnail: number;
    
    content: string;
    
    siteLink: string;
    
    githubLink: string;

    constructor(data: IService) {
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.content = data.content;
        this.siteLink = data.siteLink;
        this.githubLink = data.githubLink;
    }

    static empty() {
        return new Service({
            title: "",
            thumbnail: 0,
            content: "",
            siteLink: "",
            githubLink: ""
        });
    }
}
