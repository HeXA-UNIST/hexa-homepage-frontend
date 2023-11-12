export default class ProjectMember {
  userId: number;

  userName: string;

  name: string;

  profileUrl: string;

  constructor({
    userId,
    userName,
    name,
    profileUrl,
  }: {
    userId: number;
    userName: string;
    name: string;
    profileUrl: string;
  }) {
    this.userId = userId;
    this.userName = userName;
    this.name = name;
    this.profileUrl = profileUrl;
  }

  static fromJson(json: { [key: string]: any }) {
    return new ProjectMember({
      userId: json.userId,
      userName: json.userName,
      name: json.name,
      profileUrl: json.profileUrl,
    });
  }
}
