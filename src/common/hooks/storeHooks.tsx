import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import LoginStore from "@stores/AuthenticationStore";

const useStores = () =>
  useContext(MobXProviderContext) as {
    loginStore: LoginStore;
  };

export default useStores;
