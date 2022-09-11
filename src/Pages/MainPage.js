import React, { Component, useEffect } from 'react';
import Header from '../Components/Header';
import {useLocation} from 'react-router-dom'
import Footer from '../Components/Footer';
import Post from '../Components/Post';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import PostForm from '../Components/PostForm';
import MyPosts from '../Components/MyPosts'
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';
import EditPost from '../Components/EditPost'
import MyComments from '../Components/MyComments';
import WholePost from '../Components/WholePost';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from '../Components/AboutComponent';
import Contact from '../Components/ContactusComponent';





function MainPage() {
    const navigate=useNavigate()
    if(localStorage.getItem('userId'))
    {
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
}

export default MainPage;