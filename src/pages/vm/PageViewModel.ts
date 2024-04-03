import { observable, makeObservable, action } from "mobx";
import { PageStatus } from "@util/index";

export default class PageViewModel {
    @observable
    status: PageStatus;

    @observable
    errorMessage: string;

    constructor() {
        makeObservable(this);
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }

    @action
    setLoading() {
        this.status = PageStatus.Loading;
        this.errorMessage = "";
    }

    @action
    setSuccess() {
        this.status = PageStatus.Success;
        this.errorMessage = "";
    }

    @action
    setFailed(errorMessage: string) {
        this.status = PageStatus.Failed;
        this.errorMessage = errorMessage;
    }
}