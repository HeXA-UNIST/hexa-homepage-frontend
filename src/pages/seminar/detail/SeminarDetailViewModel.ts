import Seminar from "@models/seminar/Seminar";
import SeminarRepository from "@services/seminar/seminar_repository";
import { makeObservable, observable } from "mobx";
import PageViewModel from "@pages/vm/PageViewModel";



class SeminarDetailViewModel extends PageViewModel{
    @observable
    seminarId: number;

    @observable
    seminarDetail: Seminar;

    constructor(){
        super();
        this.seminarId = 0;
        this.seminarDetail = Seminar.empty();

        makeObservable(this);
    }

    // 그냥 제네릭으로 싹다 바꾸고 싶다

    setSeminarDetailSuccess(seminarDetail: Seminar){
        super.setSuccess();
        this.seminarDetail = seminarDetail;
    }


    async fetchSeminar(){
        this.setLoading();
        try{
            const seminarDetail = await SeminarRepository.getSeminarById(this.seminarId);
            this.setSeminarDetailSuccess(seminarDetail);
        } catch(e: any){
            this.setFailed(e.message);
        }
    }

    setSeminarId(seminarId: number){
        this.seminarId = seminarId;
        this.fetchSeminar();
    }

}

export default SeminarDetailViewModel;