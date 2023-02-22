export default class SeminarAttachment {
  url: string;

  name: string;

  size: string;

  constructor({
    url,
    name,
    size,
  }: {
    url: string;
    name: string;
    size: string;
  }) {
    this.url = url;
    this.name = name;
    this.size = size;
  }

  static fromJson(json: { [key: string]: any }) {
    return new SeminarAttachment({
      url: json.url,
      name: json.name,
      size: json.size,
    });
  }
}
