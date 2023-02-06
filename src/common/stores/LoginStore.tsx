import IUser from "common/models/IUser";
import { observable, action, computed } from "mobx";

class LoginStore {
  @observable isLoggedIn = false;

  @observable userData: IUser | null = null;

  @computed
  get userName() {
    return this.userData ? this.userData.name : "";
  }

  @action
  setLoggedIn = (userData: IUser) => {
    this.isLoggedIn = true;
    this.userData = userData;
  };

  @action
  setLoggedOut = () => {
    this.isLoggedIn = false;
    this.userData = null;
  };
}

export default LoginStore;
