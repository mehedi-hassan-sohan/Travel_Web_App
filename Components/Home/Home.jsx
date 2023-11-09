import Image from 'next/image';
import React from 'react';
import HomeLogo from '../../app/Assets/HomeLogo.jpg';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <div className='flex justify-around '>
                <Image src={HomeLogo} height={100} width={100} alt='Home Logo' />
                <form className='mt-7'>  
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm border-gray-300 rounded-lg bg-gray-50" placeholder="Search Your destination..." required/>
                    </div>
                </form>
                <div className='flex gap-10 mt-10'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>Career</p>
                </div>  
                <div className='mt-8'> 
                   <Link href='/Login'>
                   <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button></Link>
                    <Link href="/SingUp" >
                        <button className="focus:outline-none ms-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">SignUp</button>
                    </Link>
                </div>
            </div> 
        </div>
    );
};

export default Home;
