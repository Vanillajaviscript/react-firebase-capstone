import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import { useEffect } from "react";


const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  };


  return (
    <AuthContext.Provider value={{googleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}