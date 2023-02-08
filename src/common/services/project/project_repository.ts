import axios from "axios";
import WebConstants from "@constants";
import IProject from "@models/project/IProject";
import IProjectsQueryResult from "@models/project/IProjectsQueryResult";

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
  }: ProjectQueryParams): Promise<IProjectsQueryResult> {
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
      return IProjectsQueryResult.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async getProjectById(id: number): Promise<IProject> {
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/project?id=${id}`
      );
      return IProject.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
