// import Project, {IProject} from "./Project";
import ProjectSummary, { IProjectSummary } from "./ProjectSummary";

export interface IProejctQueryResult{
    list: IProjectSummary[];
    totalPage: number;
}

export default class ProjectsQueryResult {
  projects: ProjectSummary[];

  totalPage: number;

  constructor(data: IProejctQueryResult) {
    this.projects = data.list.map((item: IProjectSummary) => new ProjectSummary(item));
    this.totalPage = data.totalPage;
  }

  static empty() {
    return new ProjectsQueryResult({
      list: [],
      totalPage: 0
    });
  }
}
