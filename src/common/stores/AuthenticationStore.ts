import { makeAutoObservable, observable, runInAction } from "mobx";
import User from "@models/user/User";

export class AuthenticationStore {
  private _isLoggedIn = false;

  private _userData: User | null = null;

  constructor() {
    makeAutoObservable<AuthenticationStore, "_isLoggedIn" | "_userData">(this, {
      _isLoggedIn: observable,
      _userData: observable,
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  get userData() {
    return this._userData;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login = async (email: string, password: string) => {
    // TODO: Implement login logic

    runInAction(() => {
      this._isLoggedIn = false;
      this._userData = null;
    });
  };
}

const authenticationStore = new AuthenticationStore();

export default authenticationStore;
