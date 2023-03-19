import { useState } from 'react';
import { createContext } from 'react';

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [checkToken, setCheckToken] = useState(false);
  return (
    <authContext.Provider value={{ checkToken, setCheckToken }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
