import authenticationStore, {
  AuthenticationStore,
} from "@stores/AuthenticationStore";
import React, { createContext, useContext } from "react";

// Create the authentication context
const AuthenticationContext = createContext<AuthenticationStore | undefined>(
  undefined
);

// Create a custom hook to access the authentication store
export const useAuthenticationStore = (): AuthenticationStore => {
  const store = useContext(AuthenticationContext);
  if (!store) {
    throw new Error(
      "useAuthenticationStore must be used within an AuthenticationProvider"
    );
  }
  return store;
};

// Create the authentication provider component
export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthenticationContext.Provider value={authenticationStore}>
      {children}
    </AuthenticationContext.Provider>
  );
}
