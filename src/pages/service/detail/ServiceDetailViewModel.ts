import Service from "@models/service/Service";
import ServiceRepository from "@services/service/service_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";



class ServiceDetailViewModel extends PageViewModel{
    serviceId: number;

    serviceDetail: Service;

    constructor(){
        super();
        makeObservable(this, {
            serviceId: observable,
            serviceDetail: observable,
            setServiceDetailSuccess: action,
            fetchService: action,
            setServiceId: action
        });
        this.serviceId = 0;
        this.serviceDetail = Service.empty();

        
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