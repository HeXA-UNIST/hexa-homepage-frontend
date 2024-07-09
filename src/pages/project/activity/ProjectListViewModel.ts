import ProjectsQueryResult from "@models/project/ProjectsQueryResult";
import ProjectRepository, {ProjectQueryParams} from "@services/project/project_repository";
import { makeObservable, observable, action, runInAction } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";
import { ProjectStatusString } from "@models/project/Project";


class ProjectListViewModel extends PageViewModel {

  queryResult: ProjectsQueryResult;

  projectQueryOptions: ProjectQueryParams;

  techList: string[];

  constructor() {
    super();
    makeObservable(this, {
        queryResult: observable,
        projectQueryOptions: observable,
        techList: observable,
        setProjectSuccess: action,
        fetchProjects: action,
        fetchTechList: action,
        setSearchText: action,
        setStatus: action,
        setSort: action,
        setIncludeTechStack: action,
        setExcludeTechStack: action,
        setYear: action,
        setPageNum: action,
        setPerPage: action
    });
    this.queryResult = ProjectsQueryResult.empty();
    this.techList = ["javascript", "python", "java", "c/c++", "c#", "sql", "r", "php", "swift", "typescript", "objective-c"];

    this.projectQueryOptions = {
      searchText: "",
      status: ["승인중", "모집중", "진행중", "진행완료"],
      sort: "desc",
      includeTechStack: [],
      excludeTechStack: [],
      year: "2024",
      pageNum: 0,
      perPage: 15,
    };
    // this.setProjectSuccess = this.setProjectSuccess.bind(this);
    this.fetchTechList();
    console.log("eee");
    this.fetchProjects();
  }

  setProjectSuccess(queryResult: ProjectsQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  fetchProjects = async () => {
    console.log("fetching");
    this.setLoading();
    try {
        const query = {
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
          };
          console.log(query);
      const queryResult = await ProjectRepository.queryProjects(query);
      
      this.setProjectSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }

  fetchTechList = async () => {
    try{
        this.techList = await ProjectRepository.getTechStackList();
    }catch(e: any){
        throw new Error(`get tech list has error!`);
    }
    
  }

  setSearchText = (searchText: string) => {
    console.log("ee");
    this.projectQueryOptions.searchText = searchText;
    this.fetchProjects();
  }

  setStatus = (status: ProjectStatusString[]) => {
    console.log("ee");
    this.projectQueryOptions.status = status;
    this.fetchProjects();
  }

  setSort = (sort: "asc" | "desc") => {
    console.log("ee");
    runInAction(()=>{
        this.projectQueryOptions.sort = sort;
    })
    this.fetchProjects();
  }

  setIncludeTechStack = (includeTechStack: string[]) => {
    console.log("ee");
    const temp = {...this.projectQueryOptions};
    temp.includeTechStack = includeTechStack;
    this.projectQueryOptions = temp;
    console.log("setIncludeTechStack", includeTechStack, this.projectQueryOptions.includeTechStack);
    this.fetchProjects();
  }

  setExcludeTechStack = (excludeTechStack: string[]) => {
    console.log("ee");
    this.projectQueryOptions.excludeTechStack = excludeTechStack;
    this.fetchProjects();
  }

  setYear = (year: string) => {
    console.log("ee");
    this.projectQueryOptions.year = year;
    this.fetchProjects();
  }

  setPageNum = (pageNum: number) => {
    console.log("ee");
    this.projectQueryOptions.pageNum = pageNum;
    this.fetchProjects();
  }

  setPerPage = (perPage: number) => {
    console.log("ee");
    this.projectQueryOptions.perPage = perPage;
    this.fetchProjects();
  }
}

export default ProjectListViewModel;
