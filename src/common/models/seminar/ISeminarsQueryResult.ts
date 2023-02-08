import ISeminar from "./ISeminar";

export default class ISeminarsQueryResult {
  seminars: ISeminar[];

  page: number;

  maxPage: number;

  constructor(seminars: ISeminar[], page: number, maxPage: number) {
    this.seminars = seminars;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: { [key: string]: any }) {
    return new ISeminarsQueryResult(
      json.seminars.map((seminar: { [key: string]: any }) =>
        ISeminar.fromJson(seminar)
      ),
      json.page,
      json.maxPage
    );
  }

  static empty() {
    return new ISeminarsQueryResult([], 0, 0);
  }
}
