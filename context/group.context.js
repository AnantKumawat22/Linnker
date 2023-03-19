import { useState } from 'react';
import { createContext } from 'react';

export const groupContext = createContext();

const GroupContextProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState(null);
  const [allGroups, setAllGroups] = useState(null);

  return (
    <groupContext.Provider
      value={{ myGroups, setMyGroups, allGroups, setAllGroups }}
    >
      {children}
    </groupContext.Provider>
  );
};

export default GroupContextProvider;
