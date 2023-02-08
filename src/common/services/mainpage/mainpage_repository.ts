import axios from "axios";
import WebConstants from "@constants";
import IMainPageData from "@models/mainpage/IMainPageData";

export default class MainPageRepository {
  public static async getMainPageData(): Promise<IMainPageData> {
    const option = {
      url: `${WebConstants.API_URL}/mainpage/data`,
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const fakeResponse = await MainPageRepository.fakeData();
    return IMainPageData.fromJson(fakeResponse);

    try {
      const response = await axios(option);
      return IMainPageData.fromJson(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private static async fakeData() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return {
      newsList: [
        {
          newsId: 0,
          newsType: "소식",
          title: "News 1 content",
          date: "2020-01-01",
        },
        {
          newsId: 1,
          newsType: "급보",
          title: "News 2 content",
          date: "2020-01-02",
        },
        {
          newsId: 2,
          newsType: "엄보",
          title: "News 3 content",
          date: "2020-01-03",
        },
      ],
    };
  }
}
