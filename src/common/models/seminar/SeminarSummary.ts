export interface ISeminarSummary {
    seminarId: number;
    title: string;
    date: string;
    writer: string;
    hasAttachment: boolean;
}

export default class SeminarSummary {
    seminarId: number;

    title: string;

    date: string;

    writer: string;

    hasAttachment: boolean;

    constructor(data: ISeminarSummary) {
        this.seminarId = data.seminarId;
        this.title = data.title;
        this.date = data.date;
        this.writer = data.writer;
        this.hasAttachment = data.hasAttachment;    
    }
}
