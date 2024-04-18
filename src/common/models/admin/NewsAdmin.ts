export type NewsTypeAdmin = "공지" | "수상";

export interface SimpleNewsAdmin {
  newsId: number;
  newsType: NewsTypeAdmin;
  title: string;
  date: Date;
}

export interface ModifyNewsAdmin {
  newsType: NewsTypeAdmin;
  title: string;
  date: Date;
  content: string;
}

export interface CreateNewsAdmin {
  newsType: NewsTypeAdmin;
  title: string;
  date: Date;
  content: string;
}

export interface GetNewsListResultAdmin {
  totalPage: number;
  list: SimpleNewsAdmin[];
}

export interface DetailNewsAdmin {
  newsType: NewsTypeAdmin;
  title: string;
  date: Date;
  content: string;
}
