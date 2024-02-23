import Seminar from "./Seminar";

export interface SeminarsQueryType{
    seminars: Seminar[];
    page: number;
    maxPage: number;
}


export default class SeminarsQueryResult {
  seminars: Seminar[];

  page: number;

  maxPage: number;

  constructor({
    seminars,
    page,
    maxPage,
  }: {
    seminars: Seminar[];
    page: number;
    maxPage: number;
  }) {
    this.seminars = seminars.map((item: any) => new Seminar(item));
    this.page = page;
    this.maxPage = maxPage;
  }


  static empty() {
    return new SeminarsQueryResult({
      seminars: [],
      page: 0,
      maxPage: 0,
    });
  }
}
