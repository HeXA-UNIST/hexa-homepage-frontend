import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import LoginStore from "common/stores/LoginStore";

const useStores = () =>
  useContext(MobXProviderContext) as {
    loginStore: LoginStore;
  };

export default useStores;
