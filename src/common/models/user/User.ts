export default interface User {
  uid: number;
  id: string;
  name: string;
  profileImage: string | null;
  email: string;
  password: string;
  gender: "male" | "female";
  state: "active" | "rest" | "graduated" | "dropout";
  regNum: number | null;
  regYear: number;
  generation: number;
  contactNumber: string | null;
  mainMajor: string | null;
  position: string;
  authorization: "admin" | "user";
  techStack: string[];
  githubLink: string | null;
  snsList: string[];
  projects: string[];
}
