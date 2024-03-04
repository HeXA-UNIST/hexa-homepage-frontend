import ServiceSummary, { IServiceSummary } from "./ServiceSummary";

export interface IServiceQueryResult{
    list: IServiceSummary[];
    totalPage: number;
}


export default class ServicesQueryResult {
  services: ServiceSummary[];

  totalPage: number;

  constructor({
    list,
    totalPage
  }: IServiceQueryResult) {
    this.services = list.map((item: IServiceSummary) => new ServiceSummary(item));
    this.totalPage = totalPage;
  }

  static empty() {
    return new ServicesQueryResult({
      list: [],
      totalPage: 0
    });
  }
}
