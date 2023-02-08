import ISeminarAttachment from "common/models/seminar/ISeminarAttachment";

export default class ISeminar {
  seminarId: number;

  title: string;

  date: string;

  writerUserId: number;

  writerUserName: string;

  writerName: string;

  content: string;

  attachment: ISeminarAttachment[];

  page: number;

  maxPage: number;

  constructor(
    seminarId: number,
    title: string,
    date: string,
    writerUserId: number,
    writerUserName: string,
    writerName: string,
    content: string,
    attachment: ISeminarAttachment[],
    page: number,
    maxPage: number
  ) {
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
    return new ISeminar(
      json.seminarId,
      json.title,
      json.date,
      json.writerUserId,
      json.writerUserName,
      json.writerName,
      json.content,
      json.attachment.map((item: any) => ISeminarAttachment.fromJson(item)),
      json.page,
      json.maxPage
    );
  }

  static empty() {
    return new ISeminar(0, "", "", 0, "", "", "", [], 0, 0);
  }
}
