
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
