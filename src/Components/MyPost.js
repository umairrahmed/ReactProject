import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import { } from "react-icons/fa";
import {useNavigate,Link} from 'react-router-dom'


function Post(props) {
    const navigate=useNavigate()
    const handleDelete=()=>{
        if(window.confirm("Are you sure you want to delete?"))
        {
            fetch(`http://localhost:3000/posts/${props.id}`,{
            method:'DELETE'
        }).then(()=>{
            window.location.reload(false);
        })  
        }
    }
    const handleEdit=()=>{
        localStorage.setItem('title',props.title)
        localStorage.setItem('body',props.body)
        localStorage.setItem('id',props.id)
        navigate('/main/editpost')
    }

    return ( 
        <div className='postbox'   >
            <table className='posttable'>
                <tr><td className='posttitle'><b>{props.title}</b></td></tr>
                <tr><td className='postcontent'>{props.body}</td></tr>
                <hr className='row'></hr>
                <tr><tc><td><i class="fas fa-edit" onClick={()=>{handleEdit()}}></i></td></tc><td className='postman'><i class="fas fa-trash" onClick={()=>{handleDelete()}}></i></td></tr>
            </table>
        </div>
     );
}


export default Post;