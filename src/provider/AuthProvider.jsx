import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {


    const tanjim = 'hellow tanjim'


    const authInfo = {
        tanjim
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;