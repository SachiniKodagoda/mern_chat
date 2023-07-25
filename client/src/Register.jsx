export default function Register(){
    return(
        <div className="h-screen bg-blue-50">
            <form className="w-64 mx-auto">
                <input type="text" placeholder="Username" className="block w-full p-2 mb-2 rounded-sm"/>
                <input type="password" placeholder="Password" className="block w-full p-2 mb-2 rounded-sm"/>
                <button className="block w-full text-white bg-blue-500 rounded-sm">Register</button>
            </form>
        </div>
    );
}