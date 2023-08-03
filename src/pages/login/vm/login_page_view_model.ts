import authenticationStore from "@stores/AuthenticationStore";
import AuthenticationService from "common/services/authentication/authentication_service";
import { makeAutoObservable, runInAction } from "mobx";

export enum LoginPageStatus {
  normal = "normal",
  Loading = "Loading",
  Failed = "Failed",
  Success = "Success"
}

export default class LoginPageViewModew {
  loginPageStatus: LoginPageStatus = LoginPageStatus.normal;

  id = "";

  password = "";

  failedMessage = "";

  authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
    makeAutoObservable(this);
  }

  setId(id: string) {
    this.id = id;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setFailed(message: string) {
    this.loginPageStatus = LoginPageStatus.Failed;
    this.failedMessage = message;
  }

  async login() {
    this.loginPageStatus = LoginPageStatus.Loading;
    try {
      const token = await this.authenticationService.login(
        this.id,
        this.password
      );
      const user = await this.authenticationService.getUserInfo(token);
      authenticationStore.setLoggedIn(token, user);
      runInAction(() => {
        this.loginPageStatus = LoginPageStatus.Success;
      });
      return token;
    } catch (error: any) {
      this.setFailed(error.toString());

      throw error;
    }
  }
}
