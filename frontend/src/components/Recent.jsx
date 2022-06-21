import React from "react";
import {
    ArrowSmRightIcon,
} from "@heroicons/react/outline"
import ArticleCard from "./card/ArticleCard";
import professional from "./../assets/professional.jpg"

const Recent = () => {
    return (
        <div className="w-full mt-20">
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
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                </div>
            </div>
            <div className="flex justify-evenly mt-6">
                <button className="py-3 px-9 border "> <p className="flex ">More <ArrowSmRightIcon className="w-5" /></p></button>    
            </div>
                
      </div>  
    );
}

export default Recent;