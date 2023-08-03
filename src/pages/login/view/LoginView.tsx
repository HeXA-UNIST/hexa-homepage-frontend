import Header from "@pages/header/Header";
import Footer from "@pages/footer/Footer";
import { observer } from "mobx-react";
import LoginViewModel, { LoginPageType } from "../vm/login_view_model";
import LoginPage from "./LoginPage";

function LoginView({ loginViewModel }: { loginViewModel: LoginViewModel }) {
  return (
    <div className="login">
      <Header />
      {loginViewModel.loginPageType === LoginPageType.Login && (
        <LoginPage loginViewModel={loginViewModel} />
      )}
      <Footer />
    </div>
  );
}

export default observer(LoginView);
