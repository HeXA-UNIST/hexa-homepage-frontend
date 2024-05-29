import axios from "axios";
import WebConstants from "@constants";
import MainPageData from "@models/mainpage/MainPageData";

export default class MainPageRepository {
    public static async getMainPageData(): Promise<MainPageData> {
        const option = {
            url: `${WebConstants.API_URL}`,
            method: "GET",
            header: {
                "Content-Type": `application/json;charset=UTF-8`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
        };

        // const fakeResponse: IMainPageData = await MainPageRepository.fakeData();
        // return new MainPageData(fakeResponse);

        try {
            const response = await axios(option);
            return new MainPageData(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}
