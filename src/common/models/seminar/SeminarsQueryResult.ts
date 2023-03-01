import Seminar from "./Seminar";

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
    this.seminars = seminars;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: { [key: string]: any }) {
    return new SeminarsQueryResult({
      seminars: json.seminars.map((item: any) => Seminar.fromJson(item)),
      page: json.page,
      maxPage: json.maxPage,
    });
  }

  static empty() {
    return new SeminarsQueryResult({
      seminars: [],
      page: 0,
      maxPage: 0,
    });
  }
}
