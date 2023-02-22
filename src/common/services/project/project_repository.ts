import axios from "axios";
import WebConstants from "@constants";
import Project from "@models/project/Project";
import ProjectsQueryResult from "@models/project/ProjectsQueryResult";

export interface ProjectQueryParams {
  searchText?: string;
  status?: ("working" | "finished")[];
  sort: "asc" | "desc";
  includeTechStack?: string[];
  excludeTechStack?: string[];
  year: string;
  pageNum?: number;
  page: number;
}

export default class ProjectRepository {
  public static async queryProjects({
    searchText = "",
    status = ["working", "finished"],
    sort,
    includeTechStack = [],
    excludeTechStack = [],
    year,
    pageNum = 10,
    page,
  }: ProjectQueryParams): Promise<ProjectsQueryResult> {
    const params = {
      searchText,
      status,
      sort,
      includeTechStack: `[${includeTechStack.join(",")}]`,
      excludeTechStack: `[${excludeTechStack.join(",")}]`,
      year,
      pageNum,
      page,
    };
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/project/query`,
        { params }
      );
      return ProjectsQueryResult.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async getProjectById(id: number): Promise<Project> {
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/project?id=${id}`
      );
      return Project.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
