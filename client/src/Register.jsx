import { useState } from "react";

export default function Register(){
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    return(
        <div className="flex items-center h-screen bg-blue-50">
            <form className="w-64 mx-auto mb-12">
                <input 
                    value={username} 
                    onChange={ev=> setUsername(ev.target.value)} 
                    type="text" 
                    placeholder="Username" 
                    className="block w-full p-2 mb-2 border rounded-sm"/>
                <input 
                    value={password} 
                    onChange={ev=> setPassword(ev.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    className="block w-full p-2 mb-2 border rounded-sm"/>
                <button className="block w-full p-2 text-white bg-blue-500 rounded-sm">Register</button>
            </form>
        </div>
    );
}