import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovidar';
 
function AuthGaurd (){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() =>{
        console.log('Auth gaurd', user);
        if(!user) {
            navigate('/')
        }
        // console.log("AuthGaurd");
    },[user]);
    return(
        <div>
            <p>Header</p>
            <Outlet/>
            <p>Footer</p>
        </div>
    )
}

export default AuthGaurd;