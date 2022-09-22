import React, { Component, useState,useEffect, useMemo } from 'react';
import {Formik,Field,Form} from "formik"
import {useNavigate} from 'react-router-dom'
import './login.css'
import AddDeveloperQa from './AddDeveloperQa';
import {Modal,ModalBody,ModalHeader,FormGroup} from "reactstrap"


function ProjectForm(props) {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isModalOpen2,setIsModalOpen2]=useState(false)

    const [developers,setDevelopers]=useState([])
    const [qas,setQas]=useState([])
    const [users,setUsers]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    },[])
    useEffect(()=>{
        setUsers( users?.filter(user=>!(developers.includes(user.id)|| qas.includes(user.id))))

    },[developers,qas])
    const modalToggler=()=>{
        setIsModalOpen(!isModalOpen)
    }
    const modalToggler2=()=>{
        setIsModalOpen2(!isModalOpen2)
    }
    const handleAddDeveloper=(id)=>{
        var new_dev=[].concat(developers)
        new_dev.push(id)
        setDevelopers(new_dev)

    }
    const handleAddQa=(id)=>{
        var new_dev=[].concat(qas)
        new_dev.push(id)
        setQas(new_dev)

    }
    return ( 
<div className='postpage' >
    <div className='postcontainer'>
        <h1>CREATE PROJECT</h1>
        <br/>
        <Formik initialValues={{title:"",description:"",userID:"",developers:[],qas:[]}} 
        onSubmit={(values)=>{
            values.developers=developers
            values.qas=qas
            values.userID=localStorage.getItem('userId')
            fetch(' http://localhost:3000/projects',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
            }).then(()=>{
                navigate('/main')
            })
         }}
        >
            <Form>
                <label>Project Title</label><br/>
                <Field className="inputfield" name="title" type="text"  required />
                <br/><br/>
                <label>Decription</label><br/>
                <Field className="body" name="description" Component="Text Field" required />
                <br/><br/>
                <button type='button' className='developer' onClick={()=>{modalToggler()}}>Add Developers</button><button type='button' className='qa' onClick={()=>{modalToggler2()}}>Add QA's</button>
                <br/>
                <br/><br/>

                <button className='button' type='submit'>Create Project</button>
            </Form>

        </Formik>

    </div>
    <Modal isOpen={isModalOpen} toggle={()=>modalToggler()}>
        <ModalHeader toggle={()=>modalToggler()}>Add Developers</ModalHeader>
        <ModalBody>
            <div>
                {users?.map(user=><AddDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleAddDeveloper}></AddDeveloperQa>)}
            </div>
        </ModalBody>
    </Modal>
    <Modal isOpen={isModalOpen2} toggle={()=>modalToggler2()}>
        <ModalHeader toggle={()=>modalToggler2()}>Add QA's</ModalHeader>
        <ModalBody>
            <div>
                {users?.map(user=><AddDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleAddQa}></AddDeveloperQa>)}
            </div>
        </ModalBody>
    </Modal>
</div>
     );
}

export default ProjectForm;