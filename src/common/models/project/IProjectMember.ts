export default class IProjectMember {
  userId: number;

  userName: string;

  name: string;

  profileUrl: string;

  constructor(
    userId: number,
    userName: string,
    name: string,
    profileUrl: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.name = name;
    this.profileUrl = profileUrl;
  }

  static fromJson(json: { [key: string]: any }) {
    return new IProjectMember(
      json.userId,
      json.userName,
      json.name,
      json.profileUrl
    );
  }
}
