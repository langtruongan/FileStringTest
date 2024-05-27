import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from '../assets/FileString_Logo_100px.png';
export default function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
 
    let {subpage} = useParams();
    if(subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user && !redirect) {
        return <Navigate to={'/login'}/>
    }

    if (redirect) {
        return <Navigate to={redirect}/>
    }
    return (
        <div className="ml-5 mt-3">
            <div className="mb-20">
                <Link to={'/'} className='flex items-center gap-1'>
                    <img src={logo} alt="My Icon" className="h-10"/>
                </Link>
            </div>

            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}