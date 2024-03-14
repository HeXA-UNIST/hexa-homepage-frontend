import { observable } from "mobx";
import { PageStatus } from "@util/index";

export default class PageViewModel {
    @observable
    status: PageStatus;

    @observable
    errorMessage: string;

    constructor() {
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }

    setLoading() {
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }
    
    setSuccess() {
        this.status = PageStatus.Success;
        this.errorMessage = "";
    }

    setFailed(errorMessage: string) {
        this.status = PageStatus.Failed;
        this.errorMessage = errorMessage;
    }
}