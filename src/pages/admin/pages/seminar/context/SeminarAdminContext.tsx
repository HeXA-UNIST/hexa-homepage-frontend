import React, { createContext, useContext, useState } from "react";
import SeminarAdminStore from "../store/SeminarAdminStore";

// Create the authentication context
const SeminarAdminContext = createContext<SeminarAdminStore | undefined>(
  undefined
);

// Create a custom hook to access the authentication store
export const useSeminarAdminStore = (): SeminarAdminStore => {
  const store = useContext(SeminarAdminContext);
  if (!store) {
    throw new Error(
      "useSeminarAdminStore must be used within an SeminarAdminProvider"
    );
  }
  return store;
};

// Create the authentication provider component
export function SeminarAdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const seminarAdminStore = useState(() => new SeminarAdminStore())[0];

  return (
    <SeminarAdminContext.Provider value={seminarAdminStore}>
      {children}
    </SeminarAdminContext.Provider>
  );
}
