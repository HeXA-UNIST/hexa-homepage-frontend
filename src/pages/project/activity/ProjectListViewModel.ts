import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository, {ProjectQueryParams} from "@services/project/project_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";
import { ProjectStatusString } from "@models/project/Project";


class ProjectListViewModel extends PageViewModel {

  @observable
  queryResult: ProjectsQueryResult;

  @observable
  projectQueryOptions: ProjectQueryParams;

  constructor() {
    super();
    this.queryResult = ProjectsQueryResult.empty();

    this.projectQueryOptions = {
      searchText: "",
      status: ["승인중", "모집중", "진행중", "진행완료중"],
      sort: "desc",
      includeTechStack: [],
      excludeTechStack: [],
      year: 2023,
      pageNum: 1,
      perPage: 15,
    };

    makeObservable(this);
  }


  setProjectSuccess(queryResult: ProjectsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  async fetchProjects() {
    this.setLoading();
    try {
      const queryResult = await ProjectRepository.queryProjects({
        searchText:
          this.projectQueryOptions.searchText?.trim() !== ""
            ? this.projectQueryOptions.searchText
            : undefined,
        status: this.projectQueryOptions.status,
        sort: this.projectQueryOptions.sort,
        includeTechStack:
          this.projectQueryOptions.includeTechStack?.length === 0
            ? undefined
            : this.projectQueryOptions.includeTechStack,
        excludeTechStack:
          this.projectQueryOptions.excludeTechStack?.length === 0
            ? undefined
            : this.projectQueryOptions.excludeTechStack,
        year: this.projectQueryOptions.year,
        pageNum: this.projectQueryOptions.pageNum,
        perPage: this.projectQueryOptions.perPage ?? 15,
      });
      this.queryResult = queryResult;
      this.setProjectSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  setSearchText(searchText: string) {
    this.projectQueryOptions.searchText = searchText;
  }

  setStatus(status: ProjectStatusString[]) {
    this.projectQueryOptions.status = status;
  }

  setSort(sort: "asc" | "desc") {
    this.projectQueryOptions.sort = sort;
  }

  setIncludeTechStack(includeTechStack: string[]) {
    this.projectQueryOptions.includeTechStack = includeTechStack;
  }

  setExcludeTechStack(excludeTechStack: string[]) {
    this.projectQueryOptions.excludeTechStack = excludeTechStack;
  }

  setYear(year: number) {
    this.projectQueryOptions.year = year;
  }

  setPageNum(pageNum: number) {
    this.projectQueryOptions.pageNum = pageNum;
  }

  setPageIndex(perPage: number) {
    this.projectQueryOptions.perPage = perPage;
  }
}

export default ProjectListViewModel;
