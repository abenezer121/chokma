import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';
import bookcover from "./../../assets/bookcover.jpg"

const BookCard = (props) => {
    return (
        <>
            <div className="w-[70%] m-auto mt-2">
                    <img src={props.image} alt="" className="" />
                    <div className="mt-2 text-center">
                        <p>{ props.username}</p>
                        <h2>{ props.title}</h2>
                    </div>
            </div>
        </>
    );
}

export default BookCard;