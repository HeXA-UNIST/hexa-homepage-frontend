import Project from "@models/project/Project";
import ProjectRepository from "@services/project/project_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";



class ProjectDetailViewModel extends PageViewModel{
    @observable
    projectId: number;

    @observable
    projectDetail: Project;

    constructor(){
        super();
        this.projectId = 0;
        this.projectDetail = Project.empty();

        makeObservable(this);
    }

    // 그냥 제네릭으로 싹다 바꾸고 싶다

    setProjectDetailSuccess(newsDetail: Project){
        super.setSuccess();
        this.projectDetail = newsDetail;
    }


    async fetchProject(){
        this.setLoading();
        try{
            const projectDetail = await ProjectRepository.getProjectById(this.projectId);
            this.setProjectDetailSuccess(projectDetail);
        } catch(e: any){
            this.setFailed(e.message);
        }
    }

    setProjectId(projectId: number){
        this.projectId = projectId;
        this.fetchProject();
    }

}

export default ProjectDetailViewModel;