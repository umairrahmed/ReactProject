import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import {useNavigate} from 'react-router-dom'



function DeveloperProject(props) {
    const navigate=useNavigate()
    const addBug=()=>{
        localStorage.setItem('projectId',props.id)
        navigate('/qa/bug')
    }
    
    const wholePost=()=>{
        localStorage.setItem('projectId',props.id)
        navigate('/developer/wholeproject')
    }
    return ( 
        <div className='postbox' >
            <table className='posttable'>
                <div onClick={()=>{wholePost()}}>
                    <tr><td className='posttitle'><b>{props.title}</b></td></tr>
                    <tr><td className='postcontent'>{props.description}</td></tr>
                </div>
                <hr className='row'></hr>
                <tr><td className='postman'><i onClick={()=>{addBug()}} class="fas fa-pen"></i></td></tr>
            </table>
        </div>
     );
}


export default DeveloperProject;