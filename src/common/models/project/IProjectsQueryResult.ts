import IProject from "./IProject";

export default class IProjectsQueryResult {
  projects: IProject[];

  page: number;

  maxPage: number;

  constructor(projects: IProject[], page: number, maxPage: number) {
    this.projects = projects;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: { [key: string]: any }) {
    return new IProjectsQueryResult(
      json.projects.map((item: any) => IProject.fromJson(item)),
      json.page,
      json.maxPage
    );
  }

  static empty() {
    return new IProjectsQueryResult([], 0, 0);
  }
}
