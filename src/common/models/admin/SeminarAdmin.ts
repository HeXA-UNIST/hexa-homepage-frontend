export interface SimpleSeminarAdmin {
  seminarId: number;
  title: string;
  date: Date;
  attachmentsCount: number;
}

export interface ModifySeminarAdmin {
  title: string;
  content: string;
  date: Date;
  attachments: {
    fileId: number;
    fileName: string;
    fileSize: number;
  }[];
}

export interface CreateSeminarAdmin {
  title: string;
  content: string;
  date: Date;
  attachments: {
    fileId: number;
    fileName: string;
    fileSize: number;
  }[];
}

export interface GetSeminarListResultAdmin {
  totalPage: number;
  list: SimpleSeminarAdmin[];
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
