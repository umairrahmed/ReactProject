import React, { Component, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import ProjectForm from '../Components/ProjectForm';
import Posts from '../Components/Projects';
import EditProject from '../Components/EditProject'
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
                <Route path='/editproject'  element={<EditProject/>}/>
                <Route path='/createproject'  element={<ProjectForm/>}/>
                <Route path='/aboutus' element={<About/>} ></Route>
                <Route path='/contactus' element={ <Contact/> }  ></Route>

            </Routes>
            <Footer/>
            
            
        </div> 
     );
    }
}

export default MainPage;