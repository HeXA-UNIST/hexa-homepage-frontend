import SeminarSummary, { ISeminarSummary } from "./SeminarSummary";

export interface SeminarsQueryType{
    list: ISeminarSummary[];
    totalPage: number;
}


export default class SeminarsQueryResult {
  seminars: SeminarSummary[];

  totalPage: number;

  constructor({
    list, totalPage
  }: SeminarsQueryType) {
    this.seminars = list.map((item: ISeminarSummary) => new SeminarSummary(item));
    this.totalPage = totalPage;
  }


  static empty() {
    return new SeminarsQueryResult({
      list: [],
      totalPage: 0
    });
  }
}
