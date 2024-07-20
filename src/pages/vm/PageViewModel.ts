import { observable, makeObservable, action } from "mobx";
import { PageStatus } from "@util/index";

export default class PageViewModel {
    status: PageStatus;

    errorMessage: string;

    constructor() {
        makeObservable(this, {
            status: observable,
            errorMessage: observable,
            setLoading: action,
            setSuccess: action,
            setFailed: action
        });
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