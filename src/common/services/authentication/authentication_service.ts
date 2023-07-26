import WebConstants from "@constants";
import IUser from "@models/authentication/IUser";

class AuthenticationService {
  static async login(username: string, password: string) {
    try {
      const response = await fetch(`${WebConstants.API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      const data = await response.json();
      // 로그인이 성공하면 서버로부터 받은 토큰을 반환합니다.
      return data.token;
    } catch (error) {
      throw new Error("An error occurred during login.");
    }
  }

  // 로그인된 사용자의 정보를 가져오는 메서드
  static async getUserInfo(token:string) : Promise<IUser>{
    try {
      const response = await fetch(`${WebConstants.API_URL}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to get user information.");
      }

      const data = await response.json();

      const user:IUser = {
        uid: data.uid,
        id: data.id,
        name: data.name,
        profileImage: data.profileImage,
        email: data.email,
        password: data.password,
        gender: data.gender,
        state: data.state,
        regNum: data.regNum,
        regYear: data.regYear,
        generation: data.generation,
        contactNumber: data.contactNumber,
        mainMajor: data.mainMajor,
        position: data.position,
        authorization: data.authorization,
        techStack: data.techStack,
        githubLink: data.githubLink,
        snsList: data.snsList,
        projects: data.projects
      };

      return user;
    } catch (error) {
      throw new Error("An error occurred while getting user information.");
    }
  }
}

export default AuthenticationService;
