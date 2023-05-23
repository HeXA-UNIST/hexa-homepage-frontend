import ProjectMember from "@models/project/ProjectMember";

export default class Project {
  projectId: number;

  title: string;

  thumbnailUrl: string;

  startDate: string;

  endDate: string | null;

  techStackList: string[];

  memberList: ProjectMember[];

  status: string;

  isPublic: boolean;

  content: string | null;

  constructor({
    projectId,
    title,
    thumbnailUrl,
    startDate,
    endDate,
    techStackList,
    memberList,
    status,
    isPublic,
    content,
  }: {
    projectId: number;
    title: string;
    thumbnailUrl: string;
    startDate: string;
    endDate: string | null;
    techStackList: string[];
    memberList: ProjectMember[];
    status: string;
    isPublic: boolean;
    content: string | null;
  }) {
    this.projectId = projectId;
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.startDate = startDate;
    this.endDate = endDate;
    this.techStackList = techStackList;
    this.memberList = memberList;
    this.status = status;
    this.isPublic = isPublic;
    this.content = content;
  }

  static fromJson(json: { [key: string]: any }) {
    return new Project({
      projectId: json.projectId,
      title: json.title,
      thumbnailUrl: json.thumbnailUrl,
      startDate: json.startDate,
      endDate: json.endDate,
      techStackList: json.techStackList,
      memberList: json.memberList.map((item: any) =>
        ProjectMember.fromJson(item)
      ),
      status: json.status,
      isPublic: json.public,
      content: json.content ?? null,
    });
  }

  static empty() {
    return new Project({
      projectId: 0,
      title: "",
      thumbnailUrl: "",
      startDate: "",
      endDate: null,
      techStackList: [],
      memberList: [],
      status: "",
      isPublic: false,
      content: null,
    });
  }
}
