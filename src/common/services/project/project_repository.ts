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

    const fakeResponse = await ProjectRepository.fakeQueryData();
    return ProjectsQueryResult.fromJson(fakeResponse);

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

  private static async fakeQueryData() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return {
      projects: [
        {
          projectId: 0,
          title: "프로젝트 1",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
          startDate: "2022.01.04",
          endDate: null,
          techStackList: ["javascript", "tensorflow", "python"],
          memberList: [],
          status: "working",
          isPublic: true,
        },
        {
          projectId: 1,
          title: "프로젝트 2",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
          startDate: "2022.01.04",
          endDate: "2022.03.04",
          techStackList: [
            "javascript",
            "tensorflow",
            "python",
            "java",
            "pytorch",
          ],
          memberList: [],
          status: "finished",
          isPublic: true,
        },
        {
          projectId: 2,
          title: "프로젝트 3",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
          startDate: "2022.01.04",
          endDate: "2022.03.04",
          techStackList: [
            "javascript",
            "tensorflow",
            "python",
            "java",
            "pytorch",
          ],
          memberList: [],
          status: "finished",
          isPublic: true,
        },
        {
          projectId: 3,
          title: "프로젝트 4",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
          startDate: "2022.01.04",
          endDate: "2022.03.04",
          techStackList: [
            "javascript",
            "tensorflow",
            "python",
            "java",
            "pytorch",
          ],
          memberList: [],
          status: "finished",
          isPublic: true,
        },
        {
          projectId: 4,
          title: "프로젝트 5",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
          startDate: "2022.01.04",
          endDate: "2022.03.04",
          techStackList: [
            "javascript",
            "tensorflow",
            "python",
            "java",
            "pytorch",
          ],
          memberList: [],
          status: "finished",
          isPublic: true,
        },
        {
          projectId: 5,
          title: "프로젝트 6",
          thumbnailUrl:
            "https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg",
          startDate: "2022.01.04",
          endDate: "2022.03.04",
          techStackList: [
            "javascript",
            "tensorflow",
            "python",
            "java",
            "pytorch",
          ],
          memberList: [],
          status: "finished",
          isPublic: true,
        },
      ],
      page: 0,
      maxPage: 1,
    };
  }
}
