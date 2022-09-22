import React, { Component, useEffect } from 'react';
import Footer from '../Components/Footer';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UserHeader from '../Components/UserHeader'
import BugForm from '../Components/BugForm'
import DeveloperProjects from '../Components/DeveloperProjects';
import DeveloperWholeProject from '../Components/DeveloperWholeProject';



function DeveloperPage() {
    const navigate=useNavigate()
    if(localStorage.getItem('userId'))
    {
    return (
        <div className='mainpage'>
            <UserHeader />
            <Routes>
                <Route path='/'  element={<DeveloperProjects />}/>
                <Route path='/bug'  element={<BugForm />}/>
                <Route path='/wholeproject'  element={<DeveloperWholeProject />}/>
            </Routes>
            <Footer/>
        </div> 
     );
    }
}

export default DeveloperPage;