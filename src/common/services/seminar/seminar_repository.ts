import axios from "axios";
import WebConstants from "@constants";
import SeminarsQueryResult from "@models/seminar/SeminarsQueryResult";

export interface SeminarQueryParams {
  searchText?: string;
  year: number;
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
}
