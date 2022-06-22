import React from "react";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
}  from 'react-icons/fa' 
const Footer = () => {
    return (
        <div className="w-full   mt-5 pt-1 pb-10 bg-slate-100/90  sticky top-[100vh] ">
            <div className="grid   md:grid-cols-3   mx-5  mt-20">
                <div className="flex flex-col items-center mt-5 m-auto text-md font-bold"><p>Fear of the Lord is the foundation of true knowledge, but fools despise wisdom and discipline.</p> </div>
                <div className="flex flex-col items-center mt-5">
                    <p className="text-md font-bold mb-2">Ways to follow</p>
                     <div className="flex">
                        <FaFacebook className="w-7 bg-white-300	"/>
                        <FaInstagram className="w-7 bg-white-300"/>
                        <FaTwitter className="w-7 bg-white-300"/>
                        <FaYoutube className="w-7 bg-white-300"/>
                    </div> 
                </div>
                <div className="flex flex-col    mt-5 m-auto text-md font-bold">
                    <p className="">NEW RESOURCES IN YOUR INBOX</p>
                     <form action="" className="mt-2">
                        <input type="text" placeholder="Email Address" className="border border-grey-600 py-2 pl-[14px] pr-[40px] focus:outline-none"/>
                        <button className="bg-red-500 border border-red-500 text-white py-2"><span className="px-5">Subscribe</span></button>
                    </form> 
                </div>
            </div> 
        </div>
    )
}

export default Footer;
