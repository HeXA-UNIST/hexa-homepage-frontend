import SeminarQueryResult from "@models/seminar/SeminarsQueryResult";
import SeminarRepository, {
    SeminarQueryParams
} from "common/services/seminar/seminar_repository";
import { action, makeObservable, observable } from "mobx";
import { PageStatus } from "@util/index";

export class SeminarViewModel {
    @observable
    status: PageStatus;
    

    @observable
    seminarsQueryResult: SeminarQueryResult;

    
     constructor() {
        this.status = PageStatus.Loading;
        this.seminarsQueryResult = SeminarRepository.empty();

        makeObservable(this);

        this.search({
            searchText: "",
            year: "2023",
            pageNum: 20,
            page: 0
        });
    }

    @action
    async search(queryParams: SeminarQueryParams) {
        try {
            const queryResult = await SeminarRepository.querySeminars(queryParams);

            this.status = PageStatus.Success;
            this.seminarsQueryResult = queryResult;
        } catch (error) {
            this.status = PageStatus.Failed;
        }
    }
}
