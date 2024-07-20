import React, { createContext, useContext, useState } from "react";
import ProjectAdminStore from "../store/ProjectAdminStore";

// Create the authentication context
const ProjectAdminContext = createContext<ProjectAdminStore | undefined>(
  undefined
);

// Create a custom hook to access the authentication store
export const useProjectAdminStore = (): ProjectAdminStore => {
  const store = useContext(ProjectAdminContext);
  if (!store) {
    throw new Error(
      "useProjectAdminStore must be used within an ProjectAdminProvider"
    );
  }
  return store;
};

// Create the authentication provider component
export function ProjectAdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const projectAdminStore = useState(() => new ProjectAdminStore())[0];

  return (
    <ProjectAdminContext.Provider value={projectAdminStore}>
      {children}
    </ProjectAdminContext.Provider>
  );
}
