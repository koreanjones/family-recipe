import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  const value = {
      currentUser,
      signup,
      login,
      logout
  };
  return <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>;
};
