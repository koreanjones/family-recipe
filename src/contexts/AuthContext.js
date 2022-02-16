import React, { useContext, useEffect } from "react";
import { auth } from "../firebase.config";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  const value = {
      currentUser,
      signup
  };
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
