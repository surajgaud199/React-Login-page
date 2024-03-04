import React, { useContext, useState } from 'react';
import {AuthContext} from './Authprovidar';
import { Link, useNavigate } from 'react-router-dom';

function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate();

    const {error, Signup } = useContext(AuthContext)

    function handleSignup(e){
     e.preventDefault();
    if( Signup({email,password})) {
        navigate("/Profile/")
    }
     console.log(email,password);
    }       
    return(
        <div className='flex items-center justify-center h-screen'>
        <div className='bg-yellow-100 shadow-md rounded px-8 pb-8 mb-4'>
            <form className='' onSubmit={handleSignup}>
                <h1 className='text-2xl p-5 mb-5'>SignUP</h1>

                <div className='mb-4'>
                    <label className='black text-gray-700 text-sm font-bold mb-2' htmlFor='emial'>Email</label>
                    <input className='shadow border rounded w-full py-2 px-3 text-gray-700' id='emial' type='emial' placeholder='Email... ' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                </div>

                <div className='mb-4'>
                <label className='black text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700' type='password' placeholder='passw... 'value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>

                  {error && <p className='p-1 m-1 text-xs bg-red-300 text-red-600 border-red-600 border rounded'>{error}</p>}

                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>

            </form>
            <hr className='mt-2 text-2xl'/>
            <Link to="/">Go to Login</Link>
        </div>
    </div>
    )
}

export default Signup;