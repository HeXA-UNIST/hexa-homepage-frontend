export default class ISeminarAttachment {
  url: string;

  name: string;

  size: string;

  constructor(url: string, name: string, size: string) {
    this.url = url;
    this.name = name;
    this.size = size;
  }

  static fromJson(json: { [key: string]: any }) {
    return new ISeminarAttachment(json.url, json.name, json.size);
  }
}
