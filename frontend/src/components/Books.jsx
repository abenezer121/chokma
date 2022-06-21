import React from "react";
import DropDown from './DropDown'
import BookCard from "./card/BookCard";
import bookcover from "./../assets/bookcover.jpg"

import { CheckIcon } from "@heroicons/react/outline";
const Book = () => {
    return (
        <div className=" pt-20 w-full">
            <div className="grid md:grid-cols-2 mx-2=[1240px] mt-10">
                <div className='flex items-center  w-[80%] md:w-[90%] m-auto border-b-2 pb-4 '>
                    <ul className='flex space-x-4'>
                        <li>All Books</li>
                        <li>Topics</li>
                        <li>Authors</li>
                        <li>Dates</li>
                    </ul>
                </div>
                <div className=" flex  w-full mt-10 md:mt-0">
                     <DropDown />
                </div>
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 mr-2">
                <BookCard image={bookcover } username={"Kerry Kyriakou"} title={"Lorem ipsum dolor sit."} />   
                
            </div>
        </div>
    )
}

export default Book;