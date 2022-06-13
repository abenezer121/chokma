import React from "react";
import front from "./../assets/front.jpg"
import facebookcover from "./../assets/logo/facebook_cover_photo_1.png"
import professional from "./../assets/professional.jpg"
const Home = () => {
    return (
        <div className="w-full   pt-20 ">
            <div className="grid md:grid-cols-2 mx-10 mt-20">
                <div>
                    <img src={front} alt=""  />
                </div>
                <div className=" mx-20">
                    <div className="flex flex-col align-middle">
                        <p className="mt-10 text-gray-700">Article</p>
                        <h1 className="text-6xl	font-bold text-gray-700 mt-10">Do Christian leave behind the Basics?</h1>
                        <p className="mt-5 text-2xl font-bold text-gray-700	">MAKING SENSE OF HEBREWS 6:1–2</p>
                        <div className="flex items-center justify-between mt-5  ">
                            <div className="flex items-center">
                                <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                <p className="ml-2 text-sm">David Mathis</p>
                            </div>
                            <button className="bg-red-800 py-2 px-10 rounded-md text-white">Read More</button> 
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Home;