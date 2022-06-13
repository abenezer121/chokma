import React from 'react'
import { SearchIcon , MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../assets/logo/logo.png"
const NavBar = () => {
    return (
        <div className='w-full h-[70px] z-10 border black fixed shadow-sm'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                     <img src={logo } alt="/" className='w-20'/> 
                    <p className='pl-2 text-3xl font-bold mr-4 sm:text-4xl'>Chokma.</p>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex space-x-4'>
                        <li>Article</li>
                        <li>Books</li>
                        <li>Questions</li>
                        <li>About</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <SearchIcon  className='w-7 mr-5 grey-200'/>
                    <MenuIcon className='w-7'/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;