import { makeAutoObservable } from "mobx";

export enum LoginPageType {
    Login = "Login",
    Register = "Register",
    FindId = "FindId",
    FindPassword = "FindPassword",
}


export default class LoginViewModel {
    loginPageType: LoginPageType = LoginPageType.Login;

    constructor() {
         makeAutoObservable(this);
    }

    setLoginPageType(type: LoginPageType) {
        this.loginPageType = type;
    }
}

