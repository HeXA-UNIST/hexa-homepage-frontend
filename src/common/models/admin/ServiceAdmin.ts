export interface SimpleServiceAdmin {
  serviceId: number;
  title: number;
  description: number;
  thumbnail: number;
}

export interface ModifyServiceAdmin {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}

export interface CreateServiceAdmin {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}

export interface GetServiceListResultAdmin {
  list: SimpleServiceAdmin[];
}

export interface DetailServiceAdmin {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}
