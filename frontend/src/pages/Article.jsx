import React from "react"
import ArticleCard from "../components/card/ArticleCard";
import professional from "./../assets/professional.jpg"


const Article = () => {
    return (
        <>
            <div className="w-full ">
                <h1 className="mx-10 font-bold text-5xl pt-10">Article</h1>
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2 mr-2">
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    <ArticleCard image={professional } title={"Lorem ipsum dolor sit amet?" } date={"JUN 13,2022"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo. Deserunt laborum architecto nobis placeat?" } username={"David Mathis" } userphoto={ professional} /> 
                    
                </div>
            </div>
        </>
   );
}

export default Article;