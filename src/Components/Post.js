import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import {useNavigate} from 'react-router-dom'
import { FaComment} from "react-icons/fa";



function Post(props) {
    const navigate=useNavigate()
    const handleComment=()=>{
        localStorage.setItem('postId',props.id)
        navigate('/main/mycomments')
    }
    const wholePost=()=>{
        localStorage.setItem('postId',props.id)
        navigate('/main/wholepost')
    }
    return ( 
        <div className='postbox' >
            <table className='posttable'>
                <div onClick={()=>{wholePost()}}>
                    <tr><td className='posttitle'><b>{props.title}</b></td></tr>
                    <tr><td className='postcontent'>{props.body}</td></tr>
                </div>
                <hr className='row'></hr>
                <tr><td className='postman'><b>{props.userId}</b></td><tc><i onClick={()=>{handleComment()}} class="fas fa-comment"></i></tc></tr>
            </table>
        </div>
     );
}


export default Post;