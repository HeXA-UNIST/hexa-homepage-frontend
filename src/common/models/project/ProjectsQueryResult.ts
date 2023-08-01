import Project from "./Project";

export default class ProjectsQueryResult {
  projects: Project[];

  page: number;

  maxPage: number;

  constructor({
    projects,
    page,
    maxPage,
  }: {
    projects: Project[];
    page: number;
    maxPage: number;
  }) {
    this.projects = projects;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: { [key: string]: any }) {
    return new ProjectsQueryResult({
      projects: json.projects.map((item: any) => Project.fromJson(item)),
      page: json.page,
      maxPage: json.maxPage,
    });
  }

  static empty() {
    return new ProjectsQueryResult({
      projects: [],
      page: 0,
      maxPage: 0,
    });
  }
}
