import React, { createContext, useState, useContext } from "react";

export const ForceReloadDataContext = createContext();

export default function ForceReloadDataProvider({ children }) {
  const [disable, setDisable] = useState(false);

  return (
    <ForceReloadDataContext.Provider
      value={{
        disable,
        setDisable,
      }}
    >
      {children}
    </ForceReloadDataContext.Provider>
  );
}

export function useForceReloadData() {
  const context = useContext(ForceReloadDataContext);
  if (!context)
    throw new Error("useDisable must be used within a ForceReloadDataProvider");
  const { disable, setDisable } = context;
  return { disable, setDisable };
}
