import IProjectMember from "common/models/project/IProjectMember";

export default class IProject {
  projectId: number;

  title: string;

  thumbnailUrl: string;

  startDate: string;

  endDate: string | null;

  techStackList: string[];

  memberList: IProjectMember[];

  status: string;

  isPublic: boolean;

  content: string | null;

  constructor(
    projectId: number,
    title: string,
    thumbnailUrl: string,
    startDate: string,
    endDate: string | null,
    techStackList: string[],
    memberList: IProjectMember[],
    status: string,
    isPublic: boolean,
    content: string | null
  ) {
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
    return new IProject(
      json.projectId,
      json.title,
      json.thumbnailUrl,
      json.startDate,
      json.endDate,
      json.techStackList,
      json.memberList.map((item: any) => IProjectMember.fromJson(item)),
      json.status,
      json.public,
      json.content ?? null
    );
  }

  static empty() {
    return new IProject(0, "", "", "", null, [], [], "", false, null);
  }
}
