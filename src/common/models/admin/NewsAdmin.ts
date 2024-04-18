export interface ModifyNewsAdmin {
  newsId: number;
  newsType: string;
  title: string;
  date: Date;
  content: string;
}

export interface CreateNewsAdmin {
  newsType: string;
  title: string;
  date: Date;
  content: string;
}

export interface GetNewsListResultAdmin {
  totalPage: number;
  list: {
    newsId: number;
    newsType: string;
    title: string;
    date: Date;
  }[];
}

export interface DetailNewsAdmin {
  newsType: string;
  title: string;
  date: Date;
  content: string;
}
