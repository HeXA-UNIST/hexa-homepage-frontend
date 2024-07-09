// import { EProjectState, convertState } from "./Project";
import { ProjectStatusString } from "./Project";



export interface IProjectSummary{
    projectId: number;
    thumbnail: number;
    title: string;
    status: ProjectStatusString;
    description: string;
}

export default class ProjectSummary {
    projectId: number;
    
    thumbnail: number;

    title: string;

    status: ProjectStatusString;

    description: string;

    constructor({ projectId, thumbnail, title, status, description }: IProjectSummary) {
        this.projectId = projectId;
        this.thumbnail = thumbnail;
        this.title = title;
        this.status = status;
        this.description = description;
    }

}
