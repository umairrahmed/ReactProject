import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import {useNavigate} from 'react-router-dom'
import {Modal,ModalBody,ModalHeader,FormGroup} from "reactstrap"
import { FaComment} from "react-icons/fa";
import {Formik,Field,Form} from "formik"




function MyComment(props) {
    const [isModalOpen,setIsModalOpen]=useState(false)

    const modalToggler=()=>{
        setIsModalOpen(!isModalOpen)
    }
    
    const navigate=useNavigate()
    const handleDelete=()=>{
        if(window.confirm("Are you sure you want to delete?"))
            {
            fetch(`http://localhost:3000/comments/${props.id}`,{
                method:'DELETE'
            }).then(()=>{
                window.location.reload(false);
            })  
            }
    }
    return (
            <div className='postbox'   >
                <table className='posttable'>
                    <tr><td className='posttitle'><b>{props.userId}</b></td></tr>
                    <tr><td className='postcontent'>{props.body}</td></tr>
                    <hr className='row'></hr>
                </table>
            </div>
     );
}


export default MyComment;