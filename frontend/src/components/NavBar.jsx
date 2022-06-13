import React , {useState} from 'react'
import { SearchIcon , MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../assets/logo/logo.png"
const NavBar = () => {

    
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-full h-[70px] z-10 bg-slate-100 fixed shadow-sm  drop-shadow-lg'>
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
                    <SearchIcon className='w-7 mr-5 grey-200' />
                    <div onClick={handleClick}>
                        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                    </div>
                    
                </div>
            </div>
               <ul  className={!nav ? 'hidden': 'absolute bg-zinc-200 w-full px-8'}>
                        <li>Article</li>
                        <li>Books</li>
                        <li>Questions</li>
                        <li>About</li>
                        <li>Donate</li>
                        
                </ul>
        </div>
    )
}

export default NavBar;