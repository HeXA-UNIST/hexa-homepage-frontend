import axios from "axios";
import WebConstants from "@constants";
import News from "@models/news/News";
import NewsQueryResult, { NewsQueryType } from "@models/news/NewsQueryResult";

export interface NewsQueryParams {
  searchText?: string;
  year: string;
  pageNum?: number;
  page: number;
}

export default class NewsRepository {
  public static async queryNews({
    searchText = "",
    year,
    pageNum = 10,
    page,
  }: NewsQueryParams): Promise<NewsQueryResult> {
    const params = {
      searchText,
      year,
      pageNum,
      page,
    };

    const fakeResponse = await NewsRepository.fakeQueryData();
    return new NewsQueryResult(fakeResponse);
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/News/query`,
        { params }
      );
      return NewsQueryResult.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async getNewsById(id: number): Promise<News> {
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/news?id=${id}`
      );
      return News.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  private static async fakeQueryData(): Promise<NewsQueryType> {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return {
      news: [
        {
          NewsId: 0,
          title: "2022 News 1",
          date: "2022.01.04",
          writerUserId: 111,
          writerUserName: "Hong",
          writerName: "홍길동",
          content: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
          attachment: [{
            url: "/download거시기",
            name: "NewsPPT.pdf",
            size: "1.3MB"
          }],
        },
        {
            NewsId: 1,
            title: "2022 News 1",
            date: "2022.01.04",
            writerUserId: 222,
            writerUserName: "Hong",
            writerName: "홍길동",
            content: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
            attachment: [],
        },
        {
          NewsId: 2,
          title: "2022 News 1",
          date: "2022.01.04",
          writerUserId: 333,
          writerUserName: "Hong",
          writerName: "홍길동",
          content: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
          attachment: [],
        },
      ],
      page: 0,
      maxPage: 1,
    };
  }

  static empty() {
    return new NewssQueryResult({
      Newss: [],
      page: 0,
      maxPage: 0,
    });
  }
}
