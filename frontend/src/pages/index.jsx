import React from "react";
import NavBar from './../components/NavBar'
import Footer from './../components/Footer'
import Home from './Home'
import Book from "./Books"
import Article from './Article'
import ArticlePage from "./ArticlePage"
import Question from './../pages/Question'
import About from "./../pages/About"
import Donate from "./../pages/Donate"
import QuestionDescription from "./QuestionDescription";
import BookDescription from "./BookDescription"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
const RootPage = () => {
    return (
        <div className='w-full h-screen '>
            <Router>
                <NavBar />
                <Routes >
                    <Route path="/" element = {<Home />}/>
                    <Route path="/question" element = {<Question />}/>
                    <Route path="/bookdescription" element = {<BookDescription />}/>
                    <Route path="/articlepage" element = {<ArticlePage />}/>
                    <Route path="/article" element={<Article />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/donate" element = {<Donate />}/>
                    <Route path="/book" element={<Book />} />
                    <Route path="/questoindescription" element={<QuestionDescription/>}/>
                </Routes >   
                <Footer/> 
            </Router>
            
        </div>
    )
}

export default RootPage