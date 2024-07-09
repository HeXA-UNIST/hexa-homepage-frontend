import React, { createContext, useContext, useState } from "react";
import ServiceAdminStore from "../store/ServiceAdminStore";

// Create the authentication context
const ServiceAdminContext = createContext<ServiceAdminStore | undefined>(
  undefined
);

// Create a custom hook to access the authentication store
export const useServiceAdminStore = (): ServiceAdminStore => {
  const store = useContext(ServiceAdminContext);
  if (!store) {
    throw new Error(
      "useServiceAdminStore must be used within an ServiceAdminProvider"
    );
  }
  return store;
};

// Create the authentication provider component
export function ServiceAdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceAdminStore = useState(() => new ServiceAdminStore())[0];

  return (
    <ServiceAdminContext.Provider value={serviceAdminStore}>
      {children}
    </ServiceAdminContext.Provider>
  );
}
