import React, { Component, useState } from 'react';
import {Formik,Field,Form} from "formik"
import './login.css'
import {useNavigate} from 'react-router-dom'
import { data } from 'jquery';

function PostForm(props) {
    return ( 
<div className='postpage' >
    <div className='postcontainer'>
        <h1>POST</h1>
        <br/>
        <Formik initialValues={{title:"",body:"",userId:""}} 
        onSubmit={(values)=>{
            values.userId=localStorage.getItem('userId')
            fetch(' http://localhost:3000/posts',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
            }).then(()=>{
                alert("Post is saved")
            })
            
         }}
        >
            <Form>
                <label>Post Title</label><br/>
                <Field className="inputfield" name="title" type="text"  required />
                <br/><br/>
                <label>Body</label><br/>
                <Field className="body" name="body" Component="Text Field" required />
                <br/><br/>
                <button className='button' type='submit'>Send Post</button>
            </Form>

        </Formik>

    </div>
</div>
     );
}

export default PostForm;