import React, { createContext, useContext, useEffect, useState } from "react";
// import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../Firebase/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

const [ palavra, setPalavra ] = useState()

  return (
    <AuthContext.Provider value={{ palavra, setPalavra }}>
      {children}
    </AuthContext.Provider>
  );
};