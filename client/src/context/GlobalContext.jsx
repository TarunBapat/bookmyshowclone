import { createContext, useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
  const isLoggedIn = localStorage.getItem("authToken") ? true : false;
  const [isSignedIn, setIsSignedIn] = useState(isLoggedIn);

  return (
    <GlobalContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
