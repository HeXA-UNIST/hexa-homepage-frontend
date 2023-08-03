import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import { AuthenticationStore } from "@stores/AuthenticationStore";

const useStores = () =>
  useContext(MobXProviderContext) as {
    authenticationStore: AuthenticationStore;
  };

export default useStores;
