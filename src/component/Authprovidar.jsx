import React,{ createContext, useEffect, useState } from 'react';
import  {chekLogin, userLogin, userLogout, userSignup} from '../APIs';

export const AuthContext = createContext(null);

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = ({email, password}) => {
      const data = userLogin({email, password});
      if(data){
        setUser({email, name: "gaud suraj"})
         return true;
      }else{
        setError('Email or Password is incorrect.....')
        return false;
      }
    }

    const Signup = ({email, password}) => {
    console.log('Authprovider==>',email, password);
    const isSignup = userSignup({email, password});
    if(isSignup){
        return true;
    }else{
        setUser({email, name: "gaud suraj"})
        setError('Email already exists');
        return false;
    }
    }

    const logout = () => {
        userLogout();
        setUser(null);
    }

    useEffect(() =>{
      const user = chekLogin();
        if(user){
           
            setUser({email: user, name: 'suraj gaud'});
        }
    },[])

    return(
        <AuthContext.Provider value={{user, error, login ,Signup, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;