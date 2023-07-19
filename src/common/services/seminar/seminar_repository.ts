import axios from "axios";
import WebConstants from "@constants";
import Seminar from "@models/seminar/Seminar";
import SeminarsQueryResult, { SeminarsQueryType } from "@models/seminar/SeminarsQueryResult";

export interface SeminarQueryParams {
  searchText?: string;
  year: string;
  pageNum?: number;
  page: number;
}

export default class SeminarRepository {
  public static async querySeminars({
    searchText = "",
    year,
    pageNum = 10,
    page,
  }: SeminarQueryParams): Promise<SeminarsQueryResult> {
    const params = {
      searchText,
      year,
      pageNum,
      page,
    };

    const fakeResponse = await SeminarRepository.fakeQueryData();
    return SeminarsQueryResult.fromJson(fakeResponse);
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/seminar/query`,
        { params }
      );
      return SeminarsQueryResult.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async getSeminarById(id: number): Promise<Seminar> {
    try {
      const response = await axios.get(
        `${WebConstants.API_URL}/seminar?id=${id}`
      );
      return Seminar.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  private static async fakeQueryData(): Promise<SeminarsQueryType> {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return {
      seminars: [
        {
          seminarId: 0,
          title: "2022 Seminar 1",
          date: "2022.01.04",
          writerUserId: 111,
          writerUserName: "Hong",
          writerName: "홍길동",
          content: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
          attachment: [],
        },
        {
            seminarId: 1,
            title: "2022 Seminar 1",
            date: "2022.01.04",
            writerUserId: 222,
            writerUserName: "Hong",
            writerName: "홍길동",
            content: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
            attachment: [],
        },
        {
          seminarId: 2,
          title: "2022 Seminar 1",
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
}
