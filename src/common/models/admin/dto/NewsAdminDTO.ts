export interface ModifyNewsAdminDTO {
  newsId: number;
  newsType: string;
  title: string;
  date: string;
  content: string;
}

export interface CreateNewsAdminDTO {
  newsType: string;
  title: string;
  date: string;
  content: string;
}

export interface GetNewsListResultAdminDTO {
  totalPage: number;
  list: {
    newsId: number;
    newsType: string;
    title: string;
    date: string;
  }[];
}

export interface DetailNewsAdminDTO {
  newsType: string;
  title: string;
  date: string;
  content: string;
}
