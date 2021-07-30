import React, { createContext, useState, useEffect } from 'react';
import {firebaseAuth} from '../Config/firebase';

export const AuthContext=React.createContext();

export const Authprovider = ({children}) => {
    const [currentUserName,setCurrentUserName]=useState(null);

    function login(email,password){
        return firebaseAuth.signInWithEmailAndPassword(email,password);
    }

    function signUp(email,password){
        return firebaseAuth.createUserWithEmailAndPassword(email,password);
    }

    function signOut(){
        return firebaseAuth.signOut();
    }

    useEffect(async()=>{
        firebaseAuth.onAuthStateChanged((user)=>{
            console.log("state changed",user);
            setCurrentUserName(user);
        });
    },[]);

    let value={
        currentUser:currentUserName,
        login:login,
        signUp:signUp,
        signOut:signOut
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
