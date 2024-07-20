export interface ModifyServiceAdminDTO {
  serviceId: number;
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}

export interface CreateServiceAdminDTO {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}

export interface GetServiceListResultAdminDTO {
  list: {
    serviceId: number;
    title: number;
    description: number;
    thumbnail: number;
  }[];
}

export interface DetailServiceAdminDTO {
  title: string;
  content: string;
  description: string;
  thumbnail: number;
  siteLink: string;
  githubLink: string;
}
