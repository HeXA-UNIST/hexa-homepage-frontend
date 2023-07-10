import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository from "common/services/project/project_repository";
import { makeObservable, observable } from "mobx";

export enum ProjectPageStatus {
  Loading = "Loading",
  Loaded = "Loaded",
  Error = "Error",
}

class ProjectPageViewModel {
  @observable
  status: ProjectPageStatus;

  @observable
  errorMessage: string;

  @observable
  queryResult: ProjectsQueryResult;

  @observable
  projectQueryOptions: {
    searchText: string;
    status: ("working" | "finished")[];
    sort: "asc" | "desc";
    includeTechStack: string[];
    excludeTechStack: string[];
    year: string;
    pageNum: number;
    pageIndex: number;
  };

  constructor() {
    this.status = ProjectPageStatus.Loading;
    this.errorMessage = "";
    this.queryResult = ProjectsQueryResult.empty();

    this.projectQueryOptions = {
      searchText: "",
      status: ["working", "finished"],
      sort: "desc",
      includeTechStack: [],
      excludeTechStack: [],
      year: "",
      pageNum: 10,
      pageIndex: 0,
    };

    makeObservable(this);
  }

  setLoading() {
    this.status = ProjectPageStatus.Loading;
    this.errorMessage = "";
  }

  setLoaded(queryResult: ProjectsQueryResult) {
    this.status = ProjectPageStatus.Loaded;
    this.errorMessage = "";
    this.queryResult = queryResult;
  }

  setError(errorMessage: string) {
    this.status = ProjectPageStatus.Error;
    this.errorMessage = errorMessage;
  }

  async fetchProjects() {
    this.setLoading();
    try {
      const queryResult = await ProjectRepository.queryProjects({
        searchText:
          this.projectQueryOptions.searchText.trim() !== ""
            ? this.projectQueryOptions.searchText
            : undefined,
        status: this.projectQueryOptions.status,
        sort: this.projectQueryOptions.sort,
        includeTechStack:
          this.projectQueryOptions.includeTechStack.length === 0
            ? undefined
            : this.projectQueryOptions.includeTechStack,
        excludeTechStack:
          this.projectQueryOptions.excludeTechStack.length === 0
            ? undefined
            : this.projectQueryOptions.excludeTechStack,
        year: this.projectQueryOptions.year,
        pageNum: this.projectQueryOptions.pageNum,
        page: this.projectQueryOptions.pageIndex,
      });
      this.setLoaded(queryResult);
    } catch (e: any) {
      this.setError(e.message);
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

  setYear(year: string) {
    this.projectQueryOptions.year = year;
  }

  setPageNum(pageNum: number) {
    this.projectQueryOptions.pageNum = pageNum;
  }

  setPageIndex(pageIndex: number) {
    this.projectQueryOptions.pageIndex = pageIndex;
  }
}

export default ProjectPageViewModel;
