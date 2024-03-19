
export enum EProjectState {
    Approving, // 승인중
    Recruiting, // 모집중
    InProgress, // 진행중
    Completed, // 진행완료
}

export type ProjectStatusString = "승인중" | "모집중" | "진행중" | "진행완료중";

export function convertState(stateString: ProjectStatusString): EProjectState {
    switch (stateString) {
        case "승인중":
            return EProjectState.Approving;
        case "모집중":
            return EProjectState.Recruiting;
        case "진행중":
            return EProjectState.InProgress;
        case "진행완료중":
            return EProjectState.Completed;
    }
}

export interface IProject {
    projectId: number;
    title: string;
    thumbnailUrl: string;
    startDate: string;
    endDate: string | null;
    techStackList: string[];    // 따로 interface 지정을 해줄수 있지만, 관리자 페이지에 의해 종류가 달라지기 때문에 string으로 보존.
    // memberList: IProjectMember[];
    state: ProjectStatusString;
    isPublic: boolean;
    content: string | null;
}

export default class Project {
    projectId: number;

    title: string;

    thumbnailUrl: string;

    startDate: string;

    endDate: string | null;

    techStackList: string[];

    // memberList: ProjectMember[];

    state: EProjectState;

    isPublic: boolean;

    content: string | null;

    constructor({
        projectId,
        title,
        thumbnailUrl,
        startDate,
        endDate,
        techStackList,
        // memberList,
        state,
        isPublic,
        content,
    }: IProject) {
        this.projectId = projectId;
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.startDate = startDate;
        this.endDate = endDate;
        this.techStackList = techStackList;
        // this.memberList = memberList.map(
        //     (item: IProjectMember) => new ProjectMember(item)
        // );
        this.state = convertState(state);
        this.isPublic = isPublic;
        this.content = content;
    }

    static empty() {
        return new Project({
            projectId: 0,
            title: "",
            thumbnailUrl: "",
            startDate: "",
            endDate: null,
            techStackList: [],
            // memberList: [],
            state: "승인중",
            isPublic: false,
            content: null,
        });
    }
}
