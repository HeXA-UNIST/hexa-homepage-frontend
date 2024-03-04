export interface ISeminar {
    // seminarId: number;
    title: string;
    date: string;
    writer: string;
    content: string;
    attachment: number[];
}

export default class Seminar {
    // seminarId: number;

    title: string;

    date: string;

    writer: string;

    content: string;

    attachment: number[];

    constructor({
        // seminarId,
        title,
        date,
        writer,
        content,
        attachment,
    }: ISeminar) {
        // this.seminarId = seminarId;
        this.title = title;
        this.date = date;
        this.writer = writer;
        this.content = content;
        this.attachment = attachment;
    }

    static empty() {
        return new Seminar({
            // seminarId: 0,
            title: "",
            date: "",
            writer: "",
            content: "",
            attachment: [],
        });
    }
}
