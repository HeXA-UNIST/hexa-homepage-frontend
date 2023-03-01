import SeminarAttachment from "@models/seminar/SeminarAttachment";

export default class Seminar {
  seminarId: number;

  title: string;

  date: string;

  writerUserId: number;

  writerUserName: string;

  writerName: string;

  content: string;

  attachment: SeminarAttachment[];

  page: number;

  maxPage: number;

  constructor({
    seminarId,
    title,
    date,
    writerUserId,
    writerUserName,
    writerName,
    content,
    attachment,
    page,
    maxPage,
  }: {
    seminarId: number;
    title: string;
    date: string;
    writerUserId: number;
    writerUserName: string;
    writerName: string;
    content: string;
    attachment: SeminarAttachment[];
    page: number;
    maxPage: number;
  }) {
    this.seminarId = seminarId;
    this.title = title;
    this.date = date;
    this.writerUserId = writerUserId;
    this.writerUserName = writerUserName;
    this.writerName = writerName;
    this.content = content;
    this.attachment = attachment;
    this.page = page;
    this.maxPage = maxPage;
  }

  static fromJson(json: { [key: string]: any }) {
    return new Seminar({
      seminarId: json.seminarId,
      title: json.title,
      date: json.date,
      writerUserId: json.writerUserId,
      writerUserName: json.writerUserName,
      writerName: json.writerName,
      content: json.content,
      attachment: json.attachment.map((item: any) =>
        SeminarAttachment.fromJson(item)
      ),
      page: json.page,
      maxPage: json.maxPage,
    });
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
      page: 0,
      maxPage: 0,
    });
  }
}
