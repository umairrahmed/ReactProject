import React, { Component, useEffect } from 'react';
import Header from './Header';
import {useLocation} from 'react-router-dom'
import Footer from './Footer';
import Post from './Post';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import PostForm from './PostForm';
import MyPosts from './MyPosts'
import Posts from './Posts';
import Comments from './Comments';
import EditPost from './EditPost'
import MyComments from './MyComments';
import WholePost from './WholePost';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './AboutComponent';
import Contact from './ContactusComponent';





function MainPage() {
    const navigate=useNavigate()
    return (
        <div className='mainpage'>
            
            <Header />
            <Routes>
                <Route path='/'  element={<Posts />}/>
                <Route path='/comments'  element={<Comments/>}/>
                <Route path='/post'  element={<PostForm/>}/>
                <Route path='/myposts'  element={<MyPosts/>}/>
                <Route path='/editpost'  element={<EditPost/>}/>
                <Route path='/mycomments'  element={<MyComments/>}/>
                <Route path='/wholepost'  element={<WholePost/>}/>
                <Route path='/aboutus' element={<About/>} ></Route>
                <Route path='/contactus' element={ <Contact/> }  ></Route>

            </Routes>
            <Footer/>
            
        </div> 
     );
}

export default MainPage;