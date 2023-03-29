import Link from 'next/link';

export default function Board(){
    return(
        <div className="w-full min-h-screen flex justify-center items-center bg-white-900">
            <div>
            <div className="flex justify-center items-center pb-5">
                    <h1 className="font-mono font-bold text-6xl text-black-800">Scrum Board</h1>
                </div>
                <div className="relative w-[380px] h-[480px]  bg-blue-200 rounded-lg p-5 border-2 border-blue-300">
                    <form>
                        <h2 className="text-4xl font-bold font-mono text-black-800 text-center mt-5 mb-5">Sign up</h2>

                    <div className=" font-mono relative flex flex-col mb-2">
                        <p className='font-mono text-black-900'>Name*</p>
                        <input type="text" 
                            id="name" 
                            placeholder="Enter your name"
                            className="h-12 p-2 bg-white-800 rounded-lg text-gray-700 font-mono outline-none px- peer"
                        />
                        <i className="bg-gray-900 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700
                        text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-900 peer-focus:scale-75 peer-focus:-translate-y-8">Name</label>
                    </div>
                    <div className="relative flex flex-col mb-2 mt-4">
                    <p className='font-mono text-black-900'>Email*</p>
                        <input type="email" 
                            id="email" 
                            placeholder="Enter your email"
                            className="h-12 p-2 bg-white-800 rounded-lg text-gray-700 font-mono outline-none px- peer"
                        />
                        <i className="bg-gray-900 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700
                        text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-900 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
                    </div>
                    <div className="relative flex flex-col mb-2 mt-4    ">
                    <p className='font-mono text-black-900'>Password*</p>
                        <input type="password" 
                            id="password" 
                            placeholder="Create a Password "
                            className="h-12 p-2 bg-white-800 rounded-lg text-gray-700 font-mono outline-none px- peer"
                        />
                        <i className="bg-gray-900 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700
                        text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-900 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    </div>
                   
                    <button type="submit" 
                        className="py-3 mt-5 font-mono text-gray-400 bg-blue-900 w-full rounded-lg hover:bg-blue-700
                        hover-scale-105 duration-300">Register</button>
                    
                    <h2 className="flex justify-center items-center mt-5 text-sm text-gray-900 font-mono">
                        Already have an account? 
                        <Link 
                        className="text-blue-900 pl-1" 
                        href="./login">Log in</Link>
                    </h2>
                    </form>
                </div>
            </div>
                
            
        </div>
    )
}