import { observable, action, computed, makeObservable } from "mobx";
import IUser from "@models/authentication/IUser";

class AuthenticationStore {
  @observable userData: IUser | null = null;

  @observable token: string | null = null;

  constructor() {
    makeObservable(this);
  }

  @computed
  get isLoggedIn() {
    return this.token !== null;
  }

  @computed
  get userName() {
    return this.userData ? this.userData.name : "";
  }

  @action
  setLoggedIn = (token: string, userData: IUser) => {
    this.token = token;
    this.userData = userData;
    localStorage.setItem("token", token);
  };

  @action
  setLoggedOut = () => {
    this.token = null;
    this.userData = null;
    localStorage.removeItem("token");
  };
}

export { AuthenticationStore };

const authenticationStore = new AuthenticationStore();
export default authenticationStore;
