import React from "react";
import DropDown from './DropDown'

const Book = () => {
    return (
        <div className="pt-20">
            
             <div>
                <div>
                    <ul>
                        <li>All Books</li>
                        <li>Topics</li>
                        <li>Authors</li>
                        <li>Dates</li>
                    </ul>
                </div>
                <div>
                    <DropDown/>
                 </div>
            </div>
            <div>

            </div> 
        </div>
    )
}

export default Book;