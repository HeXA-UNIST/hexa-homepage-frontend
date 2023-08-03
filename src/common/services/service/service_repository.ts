import axios from "axios";
import WebConstants from "@constants";
import Service from "@models/service/Service";
import ServicesQueryResult, {
    ServicesQueryType,
} from "@models/service/ServicesQueryResult";

export interface ServiceQueryParams {
    searchText?: string;
    year: string;
    pageNum?: number;
    page: number;
}

export default class ServiceRepository {
    public static async queryServices(): Promise<ServicesQueryResult> {

        const fakeResponse = await ServiceRepository.fakeQueryData();
        return ServicesQueryResult.fromJson(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/service/query`,
                // { params } <= service doesn't have params
            );
            return ServicesQueryResult.fromJson(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getServiceById(id: number): Promise<Service> {
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/service?id=${id}`
            );
            return Service.fromJson(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private static async fakeQueryData(): Promise<ServicesQueryType> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            services: [
                {
                    serviceId: 1,
                    name: "BUS HeXA",
                    image: "images/sample1.png",
                    introduction:
                        "BUS HeXA는 UNIST-울산 버스 배차간격 및 시간 정보 제공 서비스입니다. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    link: "./home",
                    github: "./home",
                },
                {
                    serviceId: 2,
                    name: "Blackboard Extension",
                    image: "images/sample1.png",
                    introduction:
                        "Blackboard Extension은 블랙보드 확장 프로그램입니다.",
                    link: "./home",
                    github: "./home",
                },
            ],
            page: 0,
            maxPage: 1,
        };
    }
}
