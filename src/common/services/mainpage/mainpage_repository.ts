// import axios from "axios";
// import WebConstants from "@constants";
import MainPageData, { IMainPageData } from "@models/mainpage/MainPageData";

export default class MainPageRepository {
    public static async getMainPageData(): Promise<MainPageData> {
        /*
    const option = {
      url: `${WebConstants.API_URL}/mainpage/data`,
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    */
        const fakeResponse: IMainPageData = await MainPageRepository.fakeData();
        return new MainPageData(fakeResponse);

        // try {
        //   const response = await axios(option);
        //   return MainPageData.fromJson(response.data);
        // } catch (error) {
        // //   console.log(error);
        //   throw error;
        // }
    }

    private static async fakeData(): Promise<IMainPageData> {
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
            serviceList: [
                {
                    serviceId: 0,
                    thumbnail: "images/babService.svg",
                    title: "밥먹어U",
                    subTitle: "유니스트의 학식 정보를 알려주는 서비스",
                },
                {
                    serviceId: 1,
                    thumbnail: "images/babService.svg",
                    title: "밥먹어U",
                    subTitle: "유니스트의 학식 정보를 알려주는 서비스",
                },
                {
                    serviceId: 2,
                    thumbnail: "images/babService.svg",
                    title: "밥먹어U",
                    subTitle: "유니스트의 학식 정보를 알려주는 서비스",
                },
                {
                    serviceId: 3,
                    thumbnail: "images/babService.svg",
                    title: "밥먹어U",
                    subTitle: "유니스트의 학식 정보를 알려주는 서비스",
                },
            ],
        };
    }
}
