import Service from "./Service";

export interface ServicesQueryType{
    services: Service[];
    page: number;
    maxPage: number;
}


export default class ServicesQueryResult {
  services: Service[];

  page: number;

  maxPage: number;

  constructor({
    services,
    page,
    maxPage,
  }: {
    services: Service[];
    page: number;
    maxPage: number;
  }) {
    this.services = services;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: ServicesQueryType) {
    console.log(json);
    return new ServicesQueryResult({
      services: json.services.map((item: any) => Service.fromJson(item)),
      page: json.page,
      maxPage: json.maxPage,
    });
  }

  static empty() {
    return new ServicesQueryResult({
      services: [],
      page: 0,
      maxPage: 0,
    });
  }
}
