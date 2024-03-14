import Service from "@models/service/Service";
import ServiceRepository from "@services/service/service_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";



class ServiceDetailViewModel extends PageViewModel{
    @observable
    serviceId: number;

    @observable
    serviceDetail: Service;

    constructor(){
        super();
        this.serviceId = 0;
        this.serviceDetail = Service.empty();

        makeObservable(this);
    }

    // 그냥 제네릭으로 싹다 바꾸고 싶다

    setServiceDetailSuccess(serviceDetail: Service){
        super.setSuccess();
        this.serviceDetail = serviceDetail;
    }


    async fetchService(){
        this.setLoading();
        try{
            const serviceDetail = await ServiceRepository.getServiceById(this.serviceId);
            this.setServiceDetailSuccess(serviceDetail);
        } catch(e: any){
            this.setFailed(e.message);
        }
    }

    setServiceId(serviceId: number){
        this.serviceId = serviceId;
        this.fetchService();
    }

}

export default ServiceDetailViewModel;