import React from "react";
import {
    ArrowSmRightIcon,
} from "@heroicons/react/outline"
import professional from "./../assets/professional.jpg"
const Recent = () => {
    return (
        <div className="w-full mt-20">
            <div>
                <div className="flex justify-between items-center mx-10">
                    <p className="text-gray-500">Recent</p>
                    <div className=" mx-20">
                        <p className="flex items-center text-gray-500">More <ArrowSmRightIcon className="w-5"/></p>
                    </div>
                    
                </div>
                <div className="flex justify-between items-center mx-10 mt-18">
                    <div className="grid  grid-cols-1 md:grid-cols-3   gap-x-8 gap-y-16  pt-5 sm:pt-5 text-black static">
                        
                        
                         <div className="bg-white w-[70%]   border">
                            <div className="relative">
                                <img src={professional} alt="/" />
                                <div className="absolute  top-0 mx-5 my-5 border py-0.5 bg-transparent px-8">
                                    <p className=" text-white">Article</p>
                                </div>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-[70%]   border">
                            <div>
                                    <img src={professional} alt ="/"/>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-[70%]   border">
                            <div>
                                    <img src={professional} alt ="/"/>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white w-[70%]   border">
                            <div>
                                    <img src={professional} alt ="/"/>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white w-[70%]   border">
                            <div>
                                    <img src={professional} alt ="/"/>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-white w-[70%]   border">
                            <div>
                                    <img src={professional} alt ="/"/>
                            </div>
                            <div className="mx-5">
                                <h3 className="text-xl text-gray-700">How Do i 'wrestle' in Prayer?</h3>
                                <p className="text-sm mt-2">JUN 13,2022</p>
                                <p className="mt-2 text-sm">paul speaks of wrestling , and money of us use his phrases.
                                    but we might our prayer lives actual feel like if we wresled like the apostle?
                                </p>
                                <div className="flex items-center pt-12 mb-1">
                                        <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                        <p className="ml-2 text-sm">David Mathis</p>
                                </div>
                            </div>
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