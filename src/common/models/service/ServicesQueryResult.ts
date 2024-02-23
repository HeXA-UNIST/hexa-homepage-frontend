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
    this.services = services.map((item: any) => new Service(item));
    this.page = page;
    this.maxPage = maxPage;
  }

  static empty() {
    return new ServicesQueryResult({
      services: [],
      page: 0,
      maxPage: 0,
    });
  }
}
