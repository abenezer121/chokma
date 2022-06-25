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
import Admin from "./../pages/Admin"
import QuestionDescription from "./QuestionDescription";
import BookDescription from "./BookDescription"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import { useSelector , useDispatch} from 'react-redux'
import HomeAdmin from "./Admin/HomeAdmin";
import UserAdmin from "./Admin/UserAdmin";
import BookAdmin from "./Admin/BookAdmin";
import QuestionAdmin from "./Admin/QuestionAdmin";
import ArticleAdmin from "./Admin/ArticleAdmin";
import SideBar from "../components/SideBar";


const RootPage = () => {
    const navState = useSelector(state => state.usertype)
    console.log(navState)
    const userRouter = () => {
        return (
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
                    <Route path="/questoindescription" element={<QuestionDescription />} />
                   
                </Routes >   
                 <Footer />
            </Router>
        )
    }

    const adminRouter = () => {
        return (
            <Router>
                <div className="flex">
                  
                    <div className="">
                        <SideBar /> 
                     
                    </div>  
                    <div className="bg-yellow-200 w-full h-screen">
                         <Routes>
                            <Route path="/" element={<HomeAdmin/>} />
                            <Route path="/user" element={<UserAdmin/>} />
                            <Route path="/book" element={<BookAdmin/>} />
                            <Route path="/question" element={<QuestionAdmin/>} />
                            <Route path="/article" element={<ArticleAdmin/>} />
                        </Routes>
                        
                    </div>
                       
               </div>
               
                

            </Router>
        )
    }
    return (
        <div className='w-full h-screen '>
            { navState.userType == "USER" ? adminRouter() : userRouter() }
        </div>
    )
}

export default RootPage