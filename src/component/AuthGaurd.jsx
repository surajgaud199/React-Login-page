import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './Authprovidar';
import { chekLogin } from '../APIs';
 
function AuthGaurd (){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() =>{
        const email = chekLogin();
        if(!email) {
            navigate('/')
        }
    },[]);
    return(
        <div>
            <p>Header</p>
            <Outlet/>
            <p>Footer</p>
        </div>
    )
}

export default AuthGaurd;