import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
 
function AuthGaurd (){

    useEffect(() =>{
        console.log("AuthGaurd");
    },)
    return(
        <div>
            <p>Header</p>
            <Outlet/>
            <p>Footer</p>
        </div>
    )
}

export default AuthGaurd;