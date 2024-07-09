import axios from "axios";
import QueryString from "qs";
import WebConstants from "@constants";
import Project, {
    IProject,
    ProjectStatusString,
} from "@models/project/Project";
import ProjectsQueryResult, {
    IProejctQueryResult,
} from "@models/project/ProjectsQueryResult";

export interface ProjectQueryParams {
    searchText?: string;
    status: ProjectStatusString[];
    sort: "asc" | "desc";
    includeTechStack?: string[];
    excludeTechStack?: string[];
    year: string;
    pageNum: number;
    perPage?: number;
}

export default class ProjectRepository {
    public static async queryProjects({
        searchText = "",
        status = ["승인중", "모집중", "진행중", "진행완료"],
        sort,
        includeTechStack = [],
        excludeTechStack = [],
        year,
        pageNum,
        perPage = 15,
    }: ProjectQueryParams): Promise<ProjectsQueryResult> {
        const params: ProjectQueryParams = {
            searchText,
            status,
            sort,
            includeTechStack,
            excludeTechStack,
            year,
            pageNum,
            perPage,
        };

        // const fakeResponse = await ProjectRepository.fakeQueryData();
        // return new ProjectsQueryResult(fakeResponse);

        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/project/list`,
                {
                    params,
                    paramsSerializer: (p) =>
                        QueryString.stringify(p, {
                            arrayFormat: "repeat",
                        }),
                }
            );
            return new ProjectsQueryResult(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getProjectById(id: number): Promise<Project> {
        // const fakeResponse = await ProjectRepository.fakeProjectData();
        // return new Project(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/project/detail?projectId=${id}`
            );
            return new Project(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getTechStackList(): Promise<string[]> {
        // const fakeResponse = await ProjectRepository.fakeTechList();
        // return fakeResponse;
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/project/techStackList`
            );
            return response.data.techStackList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private static async fakeQueryData(): Promise<IProejctQueryResult> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            totalPage: 7,
            list: [
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중",
                    description: ""
                },
                {
                    projectId: 1,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중",
                    description: ""
                },
            ],
        };
    }

    private static async fakeProjectData(): Promise<IProject> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            // projectId: 0,
            title: "프로젝트 1",
            thumbnail: 0,
            startDate: "2022.01.04",
            endDate: null,
            projectTechStacks: ["javascript", "tensorflow", "python"],
            // memberList: [],
            state: "진행중",
            public_status: true,
            content:
                "아무런 내용도 없습니다. lorem * 100dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddㄹ맬듲ㅁ래먖르ㅐㅁㅈ댜러매ㅑㅈ럼재ㅑ럼재ㅑ러ㅐㅁ쟈ㅓㄻㅈ름재ㅑㄹ프ㅐㅑㅁ저래ㅑㅁㄷ절재ㅑㅓㄹ",
        };
    }

    private static async fakeTechList(): Promise<string[]> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return ["javascript", "python", "c#", "c", "c++", "java"];
    }

    static empty(): ProjectsQueryResult {
        return ProjectsQueryResult.empty();
    }
}
