import React from 'react'
import QCard from '../components/card/QCard'
import { Link } from 'react-router-dom'
const Question = () => {
    return (
        <div className='w-full mt-8 '>
    
                <Link to ="/questoindescription"> <QCard /></Link>
                <Link to ="/questoindescription"> <QCard /></Link>
                <Link to ="/questoindescription"> <QCard /></Link>
                <Link to ="/questoindescription"> <QCard /></Link>
                
            
        </div>
    )
}

export default Question