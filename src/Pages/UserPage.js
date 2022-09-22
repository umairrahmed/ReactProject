import React, { Component, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import Footer from '../Components/Footer';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import UserHeader from '../Components/UserHeader'
import QaProjects from '../Components/QaProjects';
import BugForm from '../Components/BugForm'
import WholeProject from '../Components/WholeProject';




function UserPage() {
    const navigate=useNavigate()
    if(localStorage.getItem('userId'))
    {
    return (
        <div className='mainpage'>
            <UserHeader />
            <Routes>
                <Route path='/'  element={<QaProjects />}/>
                <Route path='/bug'  element={<BugForm />}/>
                <Route path='/wholeproject'  element={<WholeProject />}/>

            </Routes>
            <Footer/>
            
            
        </div> 
     );
    }
}

export default UserPage;