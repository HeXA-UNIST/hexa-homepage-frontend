import { useState } from "react";

import LoginView from "./view/LoginView";
import LoginViewModel from "./vm/login_view_model";

function LoginPage() {
  const [loginViewModel] = useState(new LoginViewModel());

  return <LoginView loginViewModel={loginViewModel} />;
}

export default LoginPage;
