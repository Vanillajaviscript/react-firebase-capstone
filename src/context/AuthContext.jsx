import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useEffect } from "react";
import { useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})
  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider);
  };

 const logOut = () => {
  signOut(auth)
 }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{googleLogin, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}