import axios from "axios";
import WebConstants from "@constants";
import Service, { IService } from "@models/service/Service";
import ServicesQueryResult, {
    IServiceQueryResult,
} from "@models/service/ServicesQueryResult";

// export interface ServiceQueryParams {
//     searchText?: string;
//     year: string;
//     pageNum?: number;
//     page: number;
// }

export default class ServiceRepository {
    public static async queryServices(): Promise<ServicesQueryResult> {

        const fakeResponse = await ServiceRepository.fakeQueryData();
        return new ServicesQueryResult(fakeResponse);
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/service/query`,
                // { params } <= service doesn't have params
            );
            return new ServicesQueryResult(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public static async getServiceById(id: number): Promise<Service> {
        const fakeResponse = await ServiceRepository.fakeServiceData();
        return new Service(fakeResponse);

        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/service?id=${id}`
            );
            return new Service(response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private static async fakeQueryData(): Promise<IServiceQueryResult> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            totalPage: 1,
            list: [
                {
                    serviceId: 1,
                    title: "BUS HeXA",
                    thumbnail: 50,
                },
                {
                    serviceId: 2,
                    title: "BUS HeXA",
                    thumbnail: 50,
                },
            ]
        };
    }

    private static async fakeServiceData(): Promise<IService> {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        return {
            title: "Bus HeXA",
            thumbnail: 50,
            content: "거시기 버스 헥사",
            siteLink: "https://google.com",
            githubLink: "https://github.com"
        };
    }
}
