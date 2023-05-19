import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const loginUser = (email, pass)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const googleLogin = ()=> {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>  {
        setLoading(true)
        return signOut(auth)
    }






    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, logedUser => {
            setLoading(false)
            setUser(logedUser)
            console.log(logedUser)
        })
        return ()=> unsubscribe()
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;