import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository, {ProjectQueryParams} from "common/services/project/project_repository";
import { makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";


class ProjectPageViewModel {
  @observable
  status: PageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: ProjectsQueryResult;

  @observable
  projectQueryOptions: ProjectQueryParams;

  constructor() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = ProjectsQueryResult.empty();

    this.projectQueryOptions = {
      searchText: "",
      status: ["working", "finished"],
      sort: "desc",
      includeTechStack: [],
      excludeTechStack: [],
      year: 2023,
      pageNum: 1,
      perPage: 15,
    };

    makeObservable(this);
  }

  setLoading() {
    this.status = PageStatus.Loading;
    this.errorMessage = "";
  }

  setSuccess(queryResult: ProjectsQueryResult) {
    this.status = PageStatus.Success;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setFailed(errorMessage: string) {
    this.status = PageStatus.Failed;
    this.errorMessage = errorMessage;
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
      this.setSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  setSearchText(searchText: string) {
    this.projectQueryOptions.searchText = searchText;
  }

  setStatus(status: ("working" | "finished")[]) {
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

export default ProjectPageViewModel;
