export interface ModifySeminarAdmin {
  seminarId: number;
  title: string;
  content: string;
  date: Date;
  attachments: number[];
}

export interface CreateSeminarAdmin {
  title: string;
  content: string;
  date: Date;
  attachments: number[];
}

export interface GetSeminarListResultAdmin {
  totalPage: number;
  list: {
    seminarId: number;
    title: string;
    date: Date;
    attachmentsCount: number;
  }[];
}

export interface DetailSeminarAdmin {
  title: string;
  content: string;
  date: Date;
  attachments: {
    fileId: number;
    fileName: string;
    fileSize: number;
  }[];
}
