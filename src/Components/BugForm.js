import React, { Component, useState,useEffect, useMemo } from 'react';
import {Formik,Field,Form} from "formik"
import {useNavigate} from 'react-router-dom'
import './login.css'


function ProjectForm(props) {


    const navigate=useNavigate()
    
    return ( 
<div className='postpage' >
    <div className='postcontainer'>
        <h1>CREATE BUG</h1>
        <br/>
        <Formik initialValues={{title:"",description:"",userID:"",deadline:"",projectID:"",status:"Pending"}} 
        onSubmit={(values)=>{
            values.userID=localStorage.getItem('userId')
            values.deadline=document.getElementById('date').value
            values.projectID=localStorage.getItem('projectId')
            if(values.deadline>=new Date().toISOString().slice(0, 10)){
            if(window.confirm("Are you sure to create this bug?"))
            {
                fetch(' http://localhost:3000/bugs',{
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(values)
                }).then(()=>{
                    navigate('/qa')
                })
                }
            }
            else{
                alert("Invalid Deadline")
            }
            }
            }
        >
            <Form>
                <label>Bug Title</label><br/>
                <Field className="inputfield" name="title" type="text"  required />
                <br/><br/>
                <label>Decription</label><br/>
                <Field className="body" name="description" Component="Text Field" required />
                <br/><br/>
                <label>Deadline</label><br/>
                <input id='date' className='body' type='date' required></input>
                <br/><br/>

                <button className='button' type='submit'>Create Bug</button>
            </Form>

        </Formik>

    </div>
</div>
     );
}

export default ProjectForm;