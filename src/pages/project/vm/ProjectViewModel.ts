import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository, {
    ProjectQueryParams
} from "common/services/project/project_repository";
import { action, makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

export class ProjectViewModel {
    @observable
    status: PageStatus;
    

    @observable
    projectsQueryResult: ProjectsQueryResult;

    
    constructor() {
        this.status = PageStatus.Loading;
        this.projectsQueryResult = ProjectsQueryResult.empty();

        makeObservable(this);

        this.search({
            searchText: "",
            sort: "asc",
            year: 2023,
            page: 0
        });
    }

    @action
    async search(queryParams: ProjectQueryParams) {
        try {
            const queryResult = await ProjectRepository.queryProjects(queryParams);

            this.status = PageStatus.Success;
            this.projectsQueryResult = queryResult;
        } catch (error) {
            this.status = PageStatus.Failed;
        }
    }
}
