import React from "react";
import {
    ArrowSmRightIcon,
} from "@heroicons/react/outline"
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
                        <div className="bg-white    border hidden sm:flex flex-col mx-10 mt-5">
                            <div className="relative">
                                    <img src={professional} alt="/" />
                                    <div className="absolute  top-0 left-0  my-5  py-0.5 bg-gray-300/20 px-8">
                                        <p className=" text-white">Article</p>
                                    </div>
                            </div>
                            <div className="mx-5">
                                    <h3 className="text-xl text-gray-700">Lorem ipsum dolor sit amet?</h3>
                                    <p className="text-sm mt-2">JUN 13,2022</p>
                                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?
                                    </p>
                                    <div className="flex items-center pt-12 mb-1">
                                            <img src={professional} className="rounded-full h-4 w-4" alt="/" />
                                            <p className="ml-2 text-sm">David Mathis</p>
                                    </div>
                            </div>
                    </div>
                    
                     <div className="bg-white    border hidden sm:flex flex-col mx-10 mt-5">
                            <div className="relative">
                                    <img src={professional} alt="/" />
                                    <div className="absolute  top-0 left-0  my-5  py-0.5 bg-gray-300/20 px-8">
                                        <p className=" text-white">Article</p>
                                    </div>
                            </div>
                            <div className="mx-5">
                                    <h3 className="text-xl text-gray-700">Lorem ipsum dolor sit amet?</h3>
                                    <p className="text-sm mt-2">JUN 13,2022</p>
                                    <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?
                                    </p>
                                    <div className="flex items-center pt-12 mb-1">
                                            <img src={professional} className="rounded-full h-4 w-4" alt="/" />
                                            <p className="ml-2 text-sm">David Mathis</p>
                                    </div>
                            </div>
                    </div>
                    
                    
                    {/* 
                        if it is above small hide
                    */}
                        <div className=" sm:hidden flex  justify-between  py-10 mx-10 border-y-2">
                                <div>
                                    <p className="font-bold text-xl">Lorem ipsum dolor sit amet?</p>
                                    <p className="text-gray-600">David Mathis <span>JUN 13,2022</span></p>
                                </div>
                                <div>
                                    <img src={professional} alt="" className="w-20" />
                                </div>
                    </div>
                    <div className=" sm:hidden flex  justify-between  py-10 mx-10 border-y-2">
                                <div>
                                    <p className="font-bold text-xl">How Do i wrestle in Prayer?</p>
                                    <p className="text-gray-600">David Mathis <span>JUN 13,2022</span></p>
                                </div>
                                <div>
                                    <img src={professional} alt="" className="w-20" />
                                </div>
                        </div>
                    </div>
            </div>
            <div className="flex justify-evenly mt-6">
                <button className="py-3 px-9 border "> <p className="flex ">More <ArrowSmRightIcon className="w-5" /></p></button>    
            </div>
                
      </div>  
    );
}

export default Recent;