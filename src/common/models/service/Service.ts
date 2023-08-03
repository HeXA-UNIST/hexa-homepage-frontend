
export interface ServiceType{
    serviceId: number;
    name: string;
    image: string;
    introduction: string;
    link: string;
    github: string;
}

export default class Service {
    serviceId: number;

    name: string;

    image: string;

    introduction: string;

    link: string;
    
    github: string;

  constructor({
    serviceId,
    name,
    image,
    introduction,
    link,
    github
  }: ServiceType) {
    this.serviceId = serviceId;
    this.name = name;
    this.image = image;
    this.introduction = introduction;
    this.link = link;
    this.github = github;
  }

  static fromJson(json: ServiceType) {
    return new Service({
      serviceId: json.serviceId,
      name: json.name,
      image: json.image,
      introduction: json.introduction,
      link: json.link,
      github: json.github
    });
  }

  static empty() {
    return new Service({
      serviceId: 0,
      name: "",
      image: "",
      introduction: "",
      link: "",
      github: ""
    });
  }
}
