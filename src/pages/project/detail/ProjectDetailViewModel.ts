import Project from "@models/project/Project";
import ProjectRepository from "@services/project/project_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";



class ProjectDetailViewModel extends PageViewModel{
    projectId: number;

    projectDetail: Project;


    constructor(){
        super();
        makeObservable(this, {
            projectId: observable,
            projectDetail: observable,
            setProjectDetailSuccess: action,
            fetchProject: action,
            setProjectId: action
        });
        this.projectId = 0;
        this.projectDetail = Project.empty();

        
    }

    // 그냥 제네릭으로 싹다 바꾸고 싶다

    setProjectDetailSuccess(newsDetail: Project){
        super.setSuccess();
        console.log(newsDetail);
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