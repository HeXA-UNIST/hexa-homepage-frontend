import React, { createContext, useContext, useState } from "react";
import NewsAdminStore from "../store/NewsAdminStore";

// Create the authentication context
const NewsAdminContext = createContext<NewsAdminStore | undefined>(undefined);

// Create a custom hook to access the authentication store
export const useNewsAdminStore = (): NewsAdminStore => {
  const store = useContext(NewsAdminContext);
  if (!store) {
    throw new Error(
      "useNewsAdminStore must be used within an NewsAdminProvider"
    );
  }
  return store;
};

// Create the authentication provider component
export function NewsAdminProvider({ children }: { children: React.ReactNode }) {
  const newsAdminStore = useState(() => new NewsAdminStore())[0];

  return (
    <NewsAdminContext.Provider value={newsAdminStore}>
      {children}
    </NewsAdminContext.Provider>
  );
}
