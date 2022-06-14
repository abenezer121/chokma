import React from "react";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
}  from 'react-icons/fa' 
const Footer = () => {
    return (
        <div className="w-full  pt-20 pb-10 bg- ">
            <div className="grid   md:grid-cols-3   mx-5  mt-20">
                <div className="flex flex-col items-center mt-5"><p>Fear of the Lord is the foundation of true knowledge, but fools despise wisdom and discipline.</p> </div>
                <div className="flex flex-col items-center mt-5">
                    <p>Ways to follow</p>
                     <div className="flex">
                        <p className="bg-white"><FaFacebook className="w-7 bg-white	"/></p> 
                        <FaInstagram className="w-7 bg-white-300"/>
                        <FaTwitter className="w-7 bg-white-300"/>
                        <FaYoutube className="w-7 bg-white-300"/>
                    </div> 
                </div>
                <div className="flex flex-col items-center mt-5">
                    <p>NEW RESOURCES IN YOUR INBOX</p>
                     <form action="" className="mt-2">
                        <input type="text" placeholder="Email Address" className="border border-grey-600 py-0.5 pl-[14px] focus:outline-none"/>
                        <button className="bg-red-500 border border-red-500 text-white py-0.5"><span className="px-5">Subscribe</span></button>
                    </form> 
                </div>
            </div> 
        </div>
    )
}

export default Footer;
