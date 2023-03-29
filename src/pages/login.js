import {useState} from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const [showDialog, setShowDialog] = useState(false);
    const router= useRouter();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!username) {
             errors.username = "Username is required!";
            }
            if (!password) {
                errors.password = "Password is required!";
            }
            if (Object.keys(errors).length === 0) {
                if (username === "richard" && password === "1234") {
                    router.push("./board");
                  } else {
                    setShowDialog(true);
                  }
            } else {
                setErrors(errors);
            }
        };
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-white-900">
            <div>
                <div className="flex justify-center items-center pb-5">
                    <h1 className="font-mono font-bold text-6xl text-black-800">Scrum Board</h1>
                </div>
                <div className="relative w-[400px] h-[420px] bg-blue-200 rounded-lg p-5 border-2 border-blue-300">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-4xl font-bold font-mono text-black-800 text-center mb-5">Log In</h2>
                    <div className="relative flex flex-col mb-2">
                    <p className='font-mono text-black-900'>Username*</p>
                        <input type="text" 
                            id="username"
                            placeholder="Input Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`h-12 p-2 bg-white-800 border-2 rounded-lg text-gray-700 font-mono outline-none px- peer 
                            ${ errors.username ? "border-red-500" : "border-blue-200"}`}
                        />
                        <i className="bg-gray-900 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900
                        text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-900 peer-focus:scale-75 peer-focus:-translate-y-8">Username</label>
                    </div>
                    <div>
                        {errors.username && (<p className="text-red-500 text-sm font-mono">{errors.username}</p>)}
                    </div>
                    
                    <div className="relative flex flex-col mt-5 mb-2">
                    <p className='font-mono text-black-900'>Password*</p>
                        <input type="password"
                            id="password"
                            placeholder="Input Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`h-12 p-2 bg-white-800 border-2 rounded-lg text-gray-700 font-mono outline-none px- peer 
                            ${ errors.username ? "border-red-500" : "border-blue-200"}`}
                        />
                        <i className="bg-gray-900 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700
                        text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-900 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    </div>
                    <div>
                        {errors.password && (<p className="text-red-500 text-sm font-mono ">{errors.password}</p>)}
                    </div>
                    
                    <button type="submit"
                        className="py-3 mt-5 font-mono text-gray-400 bg-blue-900 w-full rounded-lg hover:bg-blue-700
                        hover-scale-105 duration-300">LOGIN</button>
                    
                    <h2 className="flex justify-center items-center mt-5 text-sm text-gray-900 font-mono">
                        Don't have an account?
                        <Link 
                            className="text-blue-900 ml-1" 
                            href="./signup">Sign up</Link>
                    </h2>

                    {showDialog && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-blue-900 bg-opacity-50">
                            <div className="bg-blue-900 p-4 rounded-lg ">
                                <p className="text-red-500 font-mono font-medium mb-2">Incorrect username or password.</p>
                                <button className="bg-blue-400 text-gray-900 py-1 px-3 rounded-lg hover:bg-blue-600 "
                                    onClick={() => setShowDialog(false)}
                                > OK
                                </button>   
                            </div>
                        </div>
                    )}
                </form>
            </div>
            </div>
        </div>
    )
}