import { createUserWithEmailAndPassword, onAuthStateChanged, User, UserCredential, signOut, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config';




const Error = "Promise not set";
const AuthContext = React.createContext({
  currentUser: null,
  signUp: () => new Promise((_, rej) => rej(Error)),
  logOut: () => new Promise((_, rej) => rej(Error)),
  login: () => new Promise((_, rej) => rej(Error))
});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const signUp = useCallback(({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }, []);
  const logOut = useCallback(() => {
    return signOut(auth);
  }, []);
  const login = useCallback(({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);
  const signInWithGoogle = useCallback(() => {
    return signInWithPopup(auth,new GoogleAuthProvider());;
  }, []);

  useEffect(() => {
    const callback = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return callback;
  }, []);

  return <AuthContext.Provider value={{
      currentUser,
      signUp,
      logOut,
      login,
      signInWithGoogle
    }}>
    {!loading && children}
  </AuthContext.Provider>
}