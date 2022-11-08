import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const createUser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const passwordResetEmail =(userEmail) => {
        return sendPasswordResetEmail(auth, userEmail);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state change', currentUser);
            // if(currentUser === null || currentUser?.emailVerified){
                setUser(currentUser);
            // }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, setUser, providerLogin, signIn, createUser, logOut, loading, setLoading, updateUserProfile, passwordResetEmail};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;