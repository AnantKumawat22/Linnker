import { useState } from "react";
import { createContext } from "react";

export const groupContext = createContext();

const GroupContextProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState(null);

  return (
    <groupContext.Provider value={{ myGroups, setMyGroups }}>
      {children}
    </groupContext.Provider>
  );
};

export default GroupContextProvider;
