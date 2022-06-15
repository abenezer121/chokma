import React , {useState} from 'react'
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";

import logo from "../assets/logo/logo.png"
const NavBar = () => {

    
    const [nav, setNav] = useState(false);
    const [search , setSearch] = useState(false)
    const handleClick = () => setNav(!nav)
    const searchClick = () => setSearch(!search)
    
    return (
        <div className='w-full h-[70px] z-10 bg-slate-100 fixed shadow-sm  drop-shadow-lg'>
            {search ? <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex justify-between '>
                    <SearchIcon className='w-5' />
                    <input type="text" placeholder='Search  resource' className='border border-slate-100 bg-slate-100 py-2 pl-[14px] pr-[40px] focus:outline-none' />
                </div>
                <XIcon className='w-5' onClick={searchClick} />
            </div> : ""} 
            
            {search ? "" : <div className='px-3 w-full flex justify-between items-center w-full h-full'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                    <ArrowsExpandIcon className='w-10' />
                    <p className='pl-2 text-3xl font-bold mr-4 sm:text-4xl'>Chokma.</p>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex space-x-4'>
                        <li> Article</li>
                        <li>Books</li>
                        <li>Questions</li>
                        <li>About</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <SearchIcon className='w-5 mr-5 grey-200' onClick={searchClick} />
                    <div onClick={handleClick}>
                        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                    </div>
                    
                </div>
            </div> 
             
            </div>}
            {search ? "" : <ul  className={!nav ? 'hidden': 'absolute bg-slate-100 bg-opacity-100 shadow-xl w-full px-8'}>
                        <li className='text-xl py-3 border-b-2 border-black-500'>Article</li>
                        <li className='text-xl py-3 border-b-2 border-black-500'>Books</li>
                        <li className='text-xl py-3 border-b-2 border-black-500'>Questions</li>
                        <li className='text-xl py-3 border-b-2 border-black-500'>About</li>
                        <li className='text-xl py-3'>Donate</li>
                        
            </ul>}
                
              
        </div>
    )
}

export default NavBar;