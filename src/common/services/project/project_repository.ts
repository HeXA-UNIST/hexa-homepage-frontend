import axios from "axios";
import WebConstants from "@constants";
import Project, { IProject, ProjectStatusString } from "@models/project/Project";
import ProjectsQueryResult, {
    IProejctQueryResult,
} from "@models/project/ProjectsQueryResult";


export interface ProjectQueryParams {
    searchText?: string;
    status?: ProjectStatusString[];
    sort: "asc" | "desc";
    includeTechStack?: string[];
    excludeTechStack?: string[];
    year: number;
    pageNum: number;
    perPage?: number;
}

export default class ProjectRepository {
    public static async queryProjects({
        searchText = "",
        status = ["승인중", "모집중", "진행중", "진행완료중"],
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

        const fakeResponse = await ProjectRepository.fakeQueryData();
        return new ProjectsQueryResult(fakeResponse);

        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/project/query`,
                { params }
            );
            return new ProjectsQueryResult(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getProjectById(id: number): Promise<Project> {
        const fakeResponse = await ProjectRepository.fakeProjectData();
        return new Project(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/project?id=${id}`
            );
            return new Project(response.data);
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
            totalPage: 1,
            list: [
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
                {
                    projectId: 0,
                    title: "프로젝트 1",
                    thumbnail: 10,
                    status: "진행중"
                },
            ]
        };
    }

    private static async fakeProjectData(): Promise<IProject> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            projectId: 0,
            title: "프로젝트 1",
            thumbnailUrl:
                "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
            startDate: "2022.01.04",
            endDate: null,
            techStackList: ["javascript", "tensorflow", "python"],
            // memberList: [],
            state: "진행중",
            isPublic: true,
            content: ""
        };
    }

    static empty(): ProjectsQueryResult{
        return ProjectsQueryResult.empty();
    }
}
