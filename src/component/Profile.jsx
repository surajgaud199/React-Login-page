import React, { useContext } from 'react';
import { AuthContext } from './Authprovidar';
import { useNavigate } from 'react-router-dom';

function Profile(){
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const  userLogout = () => {
        logout();
        navigate('/');
    }


    return(
        <div className='p-4 bg-slate-400'>
        <div>Profile</div>
        <button onClick={userLogout} className='bg-red-200 mb-4 p-4 rounded'>Logout Me</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tenetur commodi qui voluptates laudantium a ipsa ut nostrum veritatis explicabo necessitatibus quod autem doloremque repudiandae eaque est velit? Delectus iure at quam tenetur enim ducimus ipsum. Temporibus labore illo ullam ad velit porro odio sunt nam, magni mollitia quae quasi.</p>
        {/* <p>Email: {user.Email}</p>
        <p>Name: {user.name}</p> */}
        </div>
    )
}

export default Profile;