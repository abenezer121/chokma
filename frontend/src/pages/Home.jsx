import React from "react";

import front from "./../assets/front.jpg"
import facebookcover from "./../assets/logo/facebook_cover_photo_1.png"
import professional from "./../assets/professional.jpg"
import {
    ArrowSmRightIcon,
} from "@heroicons/react/outline"
import ArticleCard from "./../components/card/ArticleCard";
const Home = () => {
    return (
        <div className="w-full">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 mx-10 mt-20">
                <div>
                    <img src={front} alt=""  />
                </div>
                <div className="md:mx-20">
                    <div className="flex flex-col ">
                        <p className="mt-10 text-gray-700">Article</p>
                        <h1 className="text-sm md:text-6xl	font-bold text-gray-700 mt-3">Lorem ipsum dolor sit amet consectetur?</h1>
                        <p className="mt-5 text-2xl font-bold text-gray-700	">Lorem ipsum dolor sit amet.</p>
                       
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
            <div className="mt-20">
                <div className="w-full">
            <div className="w-full">
                <div className="flex justify-between mx-10 items-center ">
                    <p className="text-gray-500">Recent</p>
                    <div className="flex">
                        <p className="text-gray-500  hidden sm:flex ">More </p>
                        <ArrowSmRightIcon className="w-5 text-gray-500"/>
                    </div>
                </div>
                {/*  */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 mr-2">
                    {/* 
                        hidden sm:flex
                        if it is only small apply flex or hide all
                    */}
                            <ArticleCard image={professional} title={"Lorem ipsum dolor sit amet?"} date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?"} username={"David Mathis"} userphoto={professional} /> 
                            <ArticleCard image={professional} title={"Lorem ipsum dolor sit amet?"} date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?"} username={"David Mathis"} userphoto={professional} /> 
                            <ArticleCard image={professional} title={"Lorem ipsum dolor sit amet?"} date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?"} username={"David Mathis"} userphoto={professional} /> 
                            <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                </div>
            </div>
            <div className="flex justify-evenly mt-6">
                <button className="py-3 px-9 border "> <p className="flex ">More <ArrowSmRightIcon className="w-5" /></p></button>    
            </div>
                
      </div> 
            </div>
        </div>
    );
}

export default Home;