import SeminarSummary, { ISeminarSummary } from "./SeminarSummary";

export interface SeminarsQueryType {
    seminars: ISeminarSummary[];
    totalPage: number;
}

export default class SeminarsQueryResult {
    seminars: SeminarSummary[];

    totalPage: number;

    constructor({ seminars, totalPage }: SeminarsQueryType) {
        this.seminars = seminars.map(
            (item: ISeminarSummary) => new SeminarSummary(item)
        );
        this.totalPage = totalPage;
    }

    static empty() {
        return new SeminarsQueryResult({
            seminars: [],
            totalPage: 0,
        });
    }
}
