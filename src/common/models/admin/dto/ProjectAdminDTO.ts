export interface GetProjectListResultAdminDTO {
  totalPage: number;
  list: {
    projectId: number;
    thumbnail: number;
    title: string;
    state: string;
  }[];
}

export interface CreateProjectAdminDTO {
  title: string;
  startDate: string;
  endDate: string;
  projectTechStacks: string[];
  state: string;
  content: string;
  description: string;
  thumbnail: number;
}

export interface DetailProjectAdminDTO {
  title: string;
  startDate: string;
  endDate: string;
  projectTechStacks: string[];
  state: string;
  content: string;
  description: string;
  thumbnail: number;
}

export interface ModifyProjectAdminDTO {
  projectId: number;
  title: string;
  startDate: string;
  endDate: string;
  projectTechStacks: string[];
  state: string;
  content: string;
  description: string;
  thumbnail: number;
}
