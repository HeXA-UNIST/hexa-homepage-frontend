export interface SimpleProjectAdmin {
  projectId: number;
  thumbnail: number;
  title: string;
  state: ProjectStateAdmin;
}

export interface GetProjectListResultAdmin {
  totalPage: number;
  list: SimpleProjectAdmin[];
}

export type ProjectStateAdmin = "승인중" | "모집중" | "진행중" | "진행완료";

export interface CreateProjectAdmin {
  title: string;
  startDate: Date;
  endDate: Date | null;
  projectTechStacks: string[];
  state: ProjectStateAdmin;
  content: string;
  description: string;
  thumbnail: number;
}

export interface DetailProjectAdmin {
  title: string;
  startDate: Date;
  endDate: Date | null;
  projectTechStacks: string[];
  state: ProjectStateAdmin;
  content: string;
  description: string;
  thumbnail: number;
}

export interface ModifyProjectAdmin {
  title: string;
  startDate: Date;
  endDate: Date | null;
  projectTechStacks: string[];
  state: ProjectStateAdmin;
  content: string;
  description: string;
  thumbnail: number;
}
