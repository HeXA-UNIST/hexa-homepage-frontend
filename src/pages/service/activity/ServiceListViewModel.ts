import ServicesQueryResult from "@models/service/ServicesQueryResult";
import ServiceRepository from "@services/service/service_repository";
import { makeObservable, observable, action } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class ServiceListViewModel extends PageViewModel {
  queryResult: ServicesQueryResult;

  constructor() {
    super();
    makeObservable(this, {
        queryResult: observable,
        setServiceSuccess: action,
        fetchServices: action
    }
    );
    this.queryResult = ServicesQueryResult.empty();
    
    this.setServiceSuccess = this.setServiceSuccess.bind(this);
    this.fetchServices();
  }

  setServiceSuccess(queryResult: ServicesQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  fetchServices = async () => {
    this.setLoading();
    try {
      const queryResult = await ServiceRepository.queryServices();
      this.setServiceSuccess(queryResult);
    } catch (e: any) {
      this.setFailed(e.message);
    }
  }
}

export default ServiceListViewModel;
