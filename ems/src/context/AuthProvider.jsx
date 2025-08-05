import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utiles/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setuserdata] = useState({});

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage() || {};
    setuserdata({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
