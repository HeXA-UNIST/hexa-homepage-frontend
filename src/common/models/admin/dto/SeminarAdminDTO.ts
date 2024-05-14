export interface ModifySeminarAdminDTO {
  seminarId: number;
  title: string;
  content: string;
  date: string;
  attachments: number[];
}

export interface CreateSeminarAdminDTO {
  title: string;
  content: string;
  date: string;
  attachments: number[];
}

export interface GetSeminarListResultAdminDTO {
  totalPage: number;
  list: {
    seminarId: number;
    title: string;
    date: string;
    attachmentsCount: number;
  }[];
}

export interface DetailSeminarAdminDTO {
  title: string;
  content: string;
  date: string;
  attachments: {
    fileId: number;
    fileName: string;
    fileSize: number;
  }[];
}
