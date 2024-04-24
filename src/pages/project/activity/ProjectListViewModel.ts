import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository, {ProjectQueryParams} from "@services/project/project_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";
import { ProjectStatusString } from "@models/project/Project";


class ProjectListViewModel extends PageViewModel {

  @observable
  queryResult: ProjectsQueryResult;

  @observable
  projectQueryOptions: ProjectQueryParams;

  @observable
  techList: string[];

  constructor() {
    super();
    makeObservable(this);
    this.queryResult = ProjectsQueryResult.empty();
    this.techList = ["javascript", "python", "java", "c/c++", "c#", "sql", "r", "php", "swift", "typescript", "objective-c"];

    this.projectQueryOptions = {
      searchText: "",
      status: ["승인중", "모집중", "진행중", "진행완료"],
      sort: "desc",
      includeTechStack: [],
      excludeTechStack: [],
      year: "2023",
      pageNum: 1,
      perPage: 15,
    };
    this.setProjectSuccess = this.setProjectSuccess.bind(this);

    this.fetchProjects();
  }

  @action
  setProjectSuccess(queryResult: ProjectsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  @action
  fetchProjects = async () => {
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

  @action
  fetchTechList = async () => {
    try{
        this.techList = await ProjectRepository.getTechStackList();
    }catch(e: any){
        throw new Error(`get tech list has error!`);
    }
    
  }

  @action
  setSearchText = (searchText: string) => {
    this.projectQueryOptions.searchText = searchText;
  }

  @action
  setStatus = (status: ProjectStatusString[]) => {
    this.projectQueryOptions.status = status;
  }

  @action
  setSort = (sort: "asc" | "desc") => {
    this.projectQueryOptions.sort = sort;
  }

  @action
  setIncludeTechStack = (includeTechStack: string[]) => {
    this.projectQueryOptions.includeTechStack = includeTechStack;
  }

  @action
  setExcludeTechStack = (excludeTechStack: string[]) => {
    this.projectQueryOptions.excludeTechStack = excludeTechStack;
  }

  @action
  setYear = (year: string) => {
    this.projectQueryOptions.year = year;
  }

  @action
  setPageNum = (pageNum: number) => {
    this.projectQueryOptions.pageNum = pageNum;
  }

  @action
  setPerPage = (perPage: number) => {
    this.projectQueryOptions.perPage = perPage;
  }
}

export default ProjectListViewModel;
