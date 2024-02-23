import Project, {IProject} from "./Project";

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
    this.projects = projects.map((item: IProject) => new Project(item));
    this.page = page;
    this.maxPage = maxPage;
  }

  static empty() {
    return new ProjectsQueryResult({
      projects: [],
      page: 0,
      maxPage: 0,
    });
  }
}
