import ServicesQueryResult from "@models/service/ServicesQueryResult";
import ServiceRepository from "@services/service/service_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";

class ServiceListViewModel extends PageViewModel {
  @observable
  queryResult: ServicesQueryResult;

  constructor() {
    super();
    this.queryResult = ServicesQueryResult.empty();
    
    makeObservable(this);
  }

  setServiceSuccess(queryResult: ServicesQueryResult) {
    super.setSuccess();
    this.queryResult = queryResult;
  }

  async fetchServices() {
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
