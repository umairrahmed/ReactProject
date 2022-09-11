import { Button } from 'bootstrap';
import React, { Component,useEffect,useState} from 'react';
import MyComment from './MyComment';
import './MyComments.css'
import {Formik,Field,Form} from "formik"
import {useNavigate} from "react-router-dom"


function MyComments() {

    const [comments,setComments]=useState( [])
    const [users,setUsers]=useState( [])
    const navigate=useNavigate()

    useEffect(()=>{
        fetch('https://reactappjsonserver.herokuapp.com/comments')
        .then(res=> { return res.json()})
        .then(comments=>{   let comment= comments.filter(comment=>comment.userId==localStorage.getItem('userId')&&comment.postId===localStorage.getItem('postId')); return comment})
        .then(data=>{setComments(data)})

        fetch('https://reactappjsonserver.herokuapp.com/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    },[])
    const updatePage=(values)=>{
        values.userId=localStorage.getItem('userId')
        values.postId=localStorage.getItem('postId')
        fetch(' https://reactappjsonserver.herokuapp.com/comments',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)
        });
    }
    return ( 

        
        <div>
            <Formik initialValues={{body:"",userId:"",postId:""}} 
                onSubmit={(values)=>{
                    
                    values.userId=localStorage.getItem('userId')
                    values.postId=localStorage.getItem('postId')
                    fetch(' https://reactappjsonserver.herokuapp.com/comments',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(values)
                    }).then(()=>{
                        window.location.reload(false);
                    })
                    
            }}
            >
            <Form>
                <Field className="comment" name="body" Component="Text Field" placeholder="Write Comment" required />
                <button className='commentbutton'><i class="fa fa-paper-plane" aria-hidden="true" ></i></button>
            </Form>

        </Formik>
            <div className='commentscontainer'>
                {comments.map(comment=><MyComment id={comment.id} userId={users[localStorage.getItem('userId')-1]?.name} postId={comment.postId} body={comment.body} />)}
            </div>
        </div>
     );
}

export default MyComments;