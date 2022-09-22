import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import {useNavigate} from 'react-router-dom'



function Project(props) {
    const navigate=useNavigate()
    const handleComment=()=>{
        localStorage.setItem('projectId',props.id)
        localStorage.setItem('title',props.title)
        localStorage.setItem('description',props.description)

        navigate('/main/editproject')
    }
    const handleDelete=()=>{
        if(window.confirm("Are you sure you want to delete?"))
        {
            fetch(`http://localhost:3000/projects/${props.id}`,{
            method:'DELETE'
        }).then(()=>{
            window.location.reload(false);
        })  
        }
        navigate('/main')
    }
    const wholePost=()=>{
        localStorage.setItem('projectId',props.id)
        navigate('/qa/wholeproject')
    }
    return ( 
        <div className='postbox' >
            <table className='posttable'>
                <div onClick={()=>{wholePost()}}>
                    <tr><td className='posttitle'><b>{props.title}</b></td></tr>
                    <tr><td className='postcontent'>{props.description}</td></tr>
                </div>
                <hr className='row'></hr>
                <tr><td className='postman'><i onClick={()=>{handleDelete()}} class="fas fa-trash"></i></td><tc><i onClick={()=>{handleComment()}} class="fas fa-edit"></i></tc></tr>
            </table>
        </div>
     );
}


export default Project;