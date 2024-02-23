export interface ISeminarAttachment{
    url: string;
    name: string;
    size: string;
}

export default class SeminarAttachment {
  url: string;

  name: string;

  size: string;

  constructor({
    url,
    name,
    size,
  }: ISeminarAttachment) {
    this.url = url;
    this.name = name;
    this.size = size;
  }

}
