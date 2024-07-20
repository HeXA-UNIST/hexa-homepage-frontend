export interface IAttachment{
    fileId: number;
    fileName: string;
    fileSize: number;
}

export interface ISeminar {
    // seminarId: number;
    title: string;
    date: string;
    writer: string;
    content: string;
    attachments: IAttachment[];
}

export default class Seminar {
    // seminarId: number;

    title: string;

    date: string;

    writer: string;

    content: string;

    attachments: IAttachment[];

    constructor({
        // seminarId,
        title,
        date,
        writer,
        content,
        attachments,
    }: ISeminar) {
        // this.seminarId = seminarId;
        this.title = title;
        this.date = date;
        this.writer = writer;
        this.content = content;
        this.attachments = attachments;
    }

    static empty() {
        return new Seminar({
            // seminarId: 0,
            title: "",
            date: "",
            writer: "",
            content: "",
            attachments: [],
        });
    }
}
