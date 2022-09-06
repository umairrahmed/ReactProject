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
        <div className='postbox'>
            <Modal isOpen={isModalOpen} toggle={()=>modalToggler()}>
                <ModalHeader toggle={()=>modalToggler()}>Update Comment</ModalHeader>
                <ModalBody>
                    <Formik initialValues={{body:props.body}} 
                            onSubmit={(values)=>{
                                values.userId=localStorage.getItem('userId')
                                fetch(`http://localhost:3000/comments/${props.id}`,{
                                    method:'PATCH',
                                    headers:{"Content-Type":"application/json"},
                                    body:JSON.stringify(values)
                                    }).then(()=>{
                                        window.location.reload(false)
                                    })
                                
                            }}
                            >
                            <Form>
                                <label>Comment</label><br/>
                                <Field className="commentText" name="body" type="text"  required />
                                <br/><br/>
                                <button className='updateComment' type='submit'>Update Comment</button>
                            </Form>

                     </Formik>
                </ModalBody>
            </Modal>
            <div className='postbox'   >
                <table className='posttable'>
                    <tr><td className='posttitle'><b>{props.userId}</b></td></tr>
                    <tr><td className='postcontent'>{props.body}</td></tr>
                    <hr className='row'></hr>
                    <tr><tc><td><i onClick={()=>{modalToggler()}} class="fas fa-edit"></i></td></tc><td className='postman'><i onClick={()=>{handleDelete()}} class="fas fa-trash" ></i></td></tr>
                </table>
            </div>
        </div>
     );
}


export default MyComment;