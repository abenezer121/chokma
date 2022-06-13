import React from "react";
import {
    ArrowSmRightIcon,
} from "@heroicons/react/outline"
import professional from "./../assets/professional.jpg"
const Recent = () => {
    return (
        <div className="w-full">
            <div>
                <div className="flex justify-between items-center mx-10">
                    <p className="text-gray-500">Recent</p>
                    <div className=" mx-20">
                        <p className="flex items-center text-gray-500">More <ArrowSmRightIcon className="w-5"/></p>
                    </div>
                    
                </div>
                <div className="flex justify-between items-center mx-10">
                    <div>
                        <div>

                        </div>
                        <h3>How Do i 'wrestle' in Prayer?</h3>
                        <p>JUN 13,2022</p>
                        <p>paul speaks of wrestling , and money of us use his phrases. but we might our prayer lives actual feel like if we wresled like the apostle?</p>
                          <div className="flex items-center">
                                <img src={professional} className="rounded-full h-8 w-8" alt="/" />
                                <p className="ml-2 text-sm">David Mathis</p>
                            </div>
                    </div> 
                </div>
            </div>
      </div>  
    );
}

export default Recent;