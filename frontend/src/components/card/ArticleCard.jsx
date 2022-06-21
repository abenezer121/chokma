import React from "react"


const ArticleCard = (props) => {
  
    return (
        <>
              <div className="bg-white    border hidden sm:flex flex-col mx-10 mt-5">
                            <div className="relative">
                                    <img src={props.image} alt="/" />
                                    <div className="absolute  top-0 left-0  my-5  py-0.5 bg-gray-300/20 px-8">
                                        <p className=" text-white">Article</p>
                                    </div>
                            </div>
                            <div className="mx-5">
                    <h3 className="text-xl text-gray-700">{props.title}</h3>
                    <p className="text-sm mt-2">{ props.date}</p>
                    <p className="mt-2 text-sm">{ props.text}
                                    </p>
                                    <div className="flex items-center pt-12 mb-1">
                                            <img src={props.userphoto} className="rounded-full h-4 w-4" alt="/" />
                        <p className="ml-2 text-sm">{ props.username}</p>
                                    </div>
                            </div>
                    </div>
                    
                    
                    {/* if it is above small hide */}
                    <div className=" sm:hidden flex  justify-between  py-10 mx-10 border-y-2">
                        <div>
                            <p className="font-bold text-xl">{ props.title}</p>
                    <p className="text-gray-600">{props.username} <span>{ props.date}</span></p>
                        </div>
                        <div>
                                    <img src={props.image} alt="" className="w-20" />
                        </div>
                    </div>
        </>
    )
}

export default ArticleCard;