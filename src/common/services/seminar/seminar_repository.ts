import axios from "axios";
import WebConstants from "@constants";
import ISeminarsQueryResult from "@models/seminar/ISeminarsQueryResult";

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
  }: SeminarQueryParams): Promise<ISeminarsQueryResult> {
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
      return ISeminarsQueryResult.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
