import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import logo from '../assets/FileString_Logo_100px.png';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/login', {email, password});
            setUser(data);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
        }
    }

    if(redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <div className="ml-5 mt-3 mb-20">
                <Link to={'/'} className='flex items-center gap-1'>
                    <img src={logo} alt="My Icon" className="h-10"/>
                </Link>
            </div>
            <div className="mt-5 grow flex items-center justify-around">
                <div className="mb-6">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                        <input type="email" 
                            placeholder="your@email.com" 
                            value={email} 
                            onChange={ev => setEmail(ev.target.value)}/>
                        <input type="password" 
                            placeholder="password" 
                            value={password} 
                            onChange={ev => setPassword(ev.target.value)}/>
                        <button className="primary">Login</button>
                        <div className="text-center py-2 text-gray-500">Dont have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link></div>
                    </form>
                </div>
            </div>
        </div>     
    );
}