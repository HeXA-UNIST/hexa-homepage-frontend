export interface ModifyServiceAdmin {
  serviceId: number;
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
  totalPage: number;
  list: {
    serviceId: number;
    title: number;
    description: number;
    thumbnail: number;
  }[];
}

export interface DetailServiceAdmin {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}
