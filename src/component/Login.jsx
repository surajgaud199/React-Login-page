import React from 'react';

function Login(){
    return(
        <>
        
        <div className='flex item-center justify-center h-screen'>
            <div className='bg-white shadow-md rounded px-8 pb-8 mb-4'>
                <form>
                    <h1 className='text-2xl mb-4'>SignUP</h1>

                    <div className='mb-4'>
                        <label className='black text-gray-700 text-sm font-bold mb-2' htmlFor='emial'>Email</label>
                        <input className='shadow border rounded w-full py-2 px-3 text-gray-700' id='emial' type='emial' placeholder='Email... ' />
                    </div>

                    <div className='mb-4'>
                    <label className='black text-gray-700 text-sm font-bold mb-2' htmlFor='passwad'>Passward</label>
                    <input className='shadow border rounded w-full py-2 px-3 text-gray-700' type='passw..' placeholder='passw... '/>
                    </div>

                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>

                </form>
            </div>
        </div>
        
        </>
    )
}

export default Login;