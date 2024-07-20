export interface IProjectMember{
    userId: number;
    userName: string;
    name: string;
    profileUrl: string;
}

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
  }: IProjectMember) {
    this.userId = userId;
    this.userName = userName;
    this.name = name;
    this.profileUrl = profileUrl;
  }
}
