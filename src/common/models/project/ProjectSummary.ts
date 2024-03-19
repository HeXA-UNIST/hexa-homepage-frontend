import { EProjectState, convertState } from "./Project";
import { ProjectStatusString } from "./Project";



export interface IProjectSummary{
    projectId: number;
    thumbnail: number;
    title: string;
    status: ProjectStatusString;
}

export default class ProjectSummary {
    projectId: number;
    
    thumbnail: number;

    title: string;

    status: EProjectState;

    constructor({ projectId, thumbnail, title, status }: IProjectSummary) {
        this.projectId = projectId;
        this.thumbnail = thumbnail;
        this.title = title;
        this.status = convertState(status);
    }

}
