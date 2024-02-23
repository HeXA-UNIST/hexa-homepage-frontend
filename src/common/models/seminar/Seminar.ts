import SeminarAttachment, {
    ISeminarAttachment,
} from "@models/seminar/SeminarAttachment";

export interface ISeminar {
    seminarId: number;
    title: string;
    date: string;
    writerUserId: number;
    writerUserName: string;
    writerName: string;
    content: string;
    attachment: ISeminarAttachment[];
}

export default class Seminar {
    seminarId: number;

    title: string;

    date: string;

    writerUserId: number;

    writerUserName: string;

    writerName: string;

    content: string;

    attachment: SeminarAttachment[];

    constructor({
        seminarId,
        title,
        date,
        writerUserId,
        writerUserName,
        writerName,
        content,
        attachment,
    }: ISeminar) {
        this.seminarId = seminarId;
        this.title = title;
        this.date = date;
        this.writerUserId = writerUserId;
        this.writerUserName = writerUserName;
        this.writerName = writerName;
        this.content = content;
        this.attachment = attachment.map(
            (item: ISeminarAttachment) => new SeminarAttachment(item)
        );
    }

    static empty() {
        return new Seminar({
            seminarId: 0,
            title: "",
            date: "",
            writerUserId: 0,
            writerUserName: "",
            writerName: "",
            content: "",
            attachment: [],
        });
    }
}
