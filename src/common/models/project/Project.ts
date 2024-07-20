export enum EProjectState {
    Approving, // 승인중
    Recruiting, // 모집중
    InProgress, // 진행중
    Completed, // 진행완료
}

export type ProjectStatusString = "승인중" | "모집중" | "진행중" | "진행완료";

export function convertState(stateString: ProjectStatusString): EProjectState {
    switch (stateString) {
        case "승인중":
            return EProjectState.Approving;
        case "모집중":
            return EProjectState.Recruiting;
        case "진행완료":
            return EProjectState.Completed;
        case "진행중":
        default:
            return EProjectState.InProgress;
    }
}

export interface IProject {
    // projectId: number;
    title: string;
    thumbnail: number;
    startDate: string;
    endDate: string | null;
    projectTechStacks: string[]; // 따로 interface 지정을 해줄수 있지만, 관리자 페이지에 의해 종류가 달라지기 때문에 string으로 보존.
    // memberList: IProjectMember[];
    state: ProjectStatusString;
    public_status: boolean;
    content: string | null;
}

export default class Project {
    // projectId: number;

    title: string;

    thumbnail: number;

    startDate: string;

    endDate: string | null;

    projectTechStacks: string[];

    // memberList: ProjectMember[];

    state: ProjectStatusString;

    isPublic: boolean;

    content: string | null;

    constructor({
        // projectId,
        title,
        thumbnail,
        startDate,
        endDate,
        projectTechStacks,
        // memberList,
        state,
        public_status: isPublic,
        content,
    }: IProject) {
        // this.projectId = projectId;
        this.title = title;
        this.thumbnail = thumbnail;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectTechStacks = projectTechStacks;
        // this.memberList = memberList.map(
        //     (item: IProjectMember) => new ProjectMember(item)
        // );
        this.state = state;
        this.isPublic = isPublic;
        this.content = content;
    }

    static empty() {
        return new Project({
            // projectId: 0,
            title: "",
            thumbnail: 0,
            startDate: "",
            endDate: null,
            projectTechStacks: [],
            // memberList: [],
            state: "승인중",
            public_status: false,
            content: null,
        });
    }
}
