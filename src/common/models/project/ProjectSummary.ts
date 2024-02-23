import { EProjectState, convertState } from "./Project";


export interface IProjectSummary{
    projectId: number;
    thumbnail: number;
    title: string;
    state: string;
}

export default class ProjectSummary {
    projectId: number;
    
    thumbnail: number;

    title: string;

    state: EProjectState;

    constructor({ projectId, thumbnail, title, state }: IProjectSummary) {
        this.projectId = projectId;
        this.thumbnail = thumbnail;
        this.title = title;
        this.state = convertState(state);
    }

}
