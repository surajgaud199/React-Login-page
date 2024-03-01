import React,{ createContext, useState } from 'react';
import  {userSignup} from '../APIs';

export const AuthContext = createContext(null);

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = () => {

    }

    const Signup = ({email, password}) => {
        console.log('Authprovider==>',email, password);
    const isSignup = userSignup({email, password});
    if(isSignup){

    }else{
        setError('Email already exists');
    }
    }

    const logout = () => {

    }

    return(
        <AuthContext.Provider value={{user, error, login ,Signup, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;