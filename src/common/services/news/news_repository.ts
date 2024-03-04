import axios from "axios";
import WebConstants from "@constants";
import News, { INews } from "@models/news/News";
import NewsQueryResult, { NewsQueryType } from "@models/news/NewsQueryResult";

export interface NewsQueryParams {
    pageNum?: number;
    perPage: number;
}

export default class NewsRepository {
    public static async queryNews({
        // searchText = "",
        // year,
        pageNum = 1,
        perPage = 10
    }: NewsQueryParams): Promise<NewsQueryResult> {
        const params = {
            // searchText,
            // year,
            pageNum,
            perPage
        };

        const fakeResponse = await NewsRepository.fakeQueryData();
        return new NewsQueryResult(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/News/query`,
                { params }
            );
            return new NewsQueryResult(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getNewsById(id: number): Promise<News> {
        const fakeResponse = await NewsRepository.fakeNewsData();
        return new News(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/news?id=${id}`
            );
            return new News(response.data);
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
            totalPage: 1,
            list: [
                {
                    newsId: 0,
                    newsType: "공지",
                    title: "소식 1 타이틀",
                    date: "2024.02.23"
                },
                {
                    newsId: 1,
                    newsType: "공지",
                    title: "소식 2 타이틀",
                    date: "2024.02.23"
                }
            ]
        };
    }

    private static async fakeNewsData(): Promise<INews> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            newsType: "공지",
            title: "소식 1 타이틀",
            content: "소식 1 content",
            date: "2024.02.23",
        };
    }

    static empty(): NewsQueryResult {
        return NewsQueryResult.empty();
    }
}
