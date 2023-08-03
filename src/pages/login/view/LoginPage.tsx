import { observer } from "mobx-react";
import { useState } from "react";
import AuthenticationService from "common/services/authentication/authentication_service";
import LoginViewModel, { LoginPageType } from "../vm/login_view_model";
import LoginPageViewModew, {
  LoginPageStatus
} from "../vm/login_page_view_model";

import "@css/login/LoginPage.css";

function LoginPage({ loginViewModel }: { loginViewModel: LoginViewModel }) {
  const [loginPageViewModel] = useState(
    new LoginPageViewModew(new AuthenticationService())
  );

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginPageViewModel.setId(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loginPageViewModel.setPassword(e.target.value);
  };

  return (
    <div className="login-page">
      <div className="login-page__content">
        <div className="login-page__content__title">회원 로그인</div>
        <div className="login-page__content__form">
          <input
            type="text"
            placeholder="아이디"
            value={loginPageViewModel.id}
            onChange={onIdChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={loginPageViewModel.password}
            onChange={onPasswordChange}
          />
          <button type="button" onClick={() => loginPageViewModel.login()}>
            로그인
          </button>
        </div>
        {loginPageViewModel.loginPageStatus === LoginPageStatus.Failed && (
          <div className="login-page__content__error">
            {loginPageViewModel.failedMessage}
          </div>
        )}

        <div className="login-page__content__action">
          <button
            type="button"
            onClick={() =>
              loginViewModel.setLoginPageType(LoginPageType.Register)
            }
          >
            회원가입
          </button>

          <button
            type="button"
            onClick={() =>
              loginViewModel.setLoginPageType(LoginPageType.FindId)
            }
          >
            아이디 찾기
          </button>

          <button
            type="button"
            onClick={() =>
              loginViewModel.setLoginPageType(LoginPageType.FindPassword)
            }
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(LoginPage);
