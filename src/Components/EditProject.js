import React, { Component,useState ,useEffect} from 'react';

import {Formik,Field,Form} from "formik"
import './login.css'
import {useNavigate} from 'react-router-dom'
import {Modal,ModalBody,ModalHeader,FormGroup} from "reactstrap"
import AddDeveloperQa from './AddDeveloperQa';
import DeleteDeveloperQa from './DeleteDeveloperQa';


function EditProject(props) {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isModalOpen2,setIsModalOpen2]=useState(false)
    const [developers,setDevelopers]=useState([])
    const [qas,setQas]=useState([])
    const [users,setUsers]=useState(null)
    const [project,setProject]=useState(null)
    const [freeUsers,setFreeUsers]=useState([])
    const [change,setChange]=useState(false)

    const navigate=useNavigate()
    const modalToggler=()=>{
        setIsModalOpen(!isModalOpen)
    }
    const modalToggler2=()=>{
        setIsModalOpen2(!isModalOpen2)
    }
    const handleAddDeveloper=(id)=>{

        project.developers.push(id)
        setProject(project)
        setChange(!change)

    }
    const handleAddQa=(id)=>{

        project.qas.push(id)
        setProject(project)
        setChange(!change)
    }
    const handleDeleteDeveloper=(id)=>{
        // setDevelopers(developers.filter(developer=>developer.id!=id))
        project.developers.pop(id)
        setProject(project)
        setChange(!change)
    }
    const handleDeleteQa=(id)=>{
        // setQas(qas.filter(qa=>qa.id!=id))
        project.qas.pop(id)
        setProject(project)
        setChange(!change)
    }
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
        fetch(`http://localhost:3000/projects/${localStorage.getItem('projectId')}`)
        .then(res=> { return res.json()})
        .then(data=>{setProject(data)})
    },[])
    useEffect(()=>{
        fetch(`http://localhost:3000/projects/${localStorage.getItem('projectId')}`)
        .then(res=> { return res.json()})
        // .then(data=>{setProject(data)})
        .then(()=>{return users.filter(user=>project.developers.includes(user.id))})
        .then(data=>setDevelopers(data))
        .then(()=>{return users.filter(user=>project.qas.includes(user.id))})
        .then(data=>setQas(data))
        .then(()=>{return users.filter(user=>!(project.developers.includes(user.id)||project.qas.includes(user.id)))})
        .then(data=>setFreeUsers(data))
    },[isModalOpen,isModalOpen2,change])
    return ( 
<div className='postpage' >
    <div className='postcontainer'>
        <h1>Edit Project</h1>
        <br/>
        <Formik initialValues={{title:localStorage.getItem('title') ,description:localStorage.getItem('description'),developers:[],qas:[]}} 
        onSubmit={(values)=>{
            values.developers=project.developers
            values.qas=project.qas
            if(window.confirm("Are you sure you want to update?"))
            {
                fetch(`http://localhost:3000/projects/${localStorage.getItem('projectId')}`,{
                method:'PATCH',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
                }).then(()=>{
                    navigate('/main')
                })
            }
         }}
        >
            <Form>
                <label>Project Title</label><br/>
                <Field className="inputfield" name="title" type="text"  required />
                <br/><br/>
                <label>Project Description</label><br/>
                <Field className="body" name="description" Component="Text Field" required />
                <br/><br/>
                <button type='button' className='developer' onClick={()=>{modalToggler()}}>Edit Developers</button><button type='button' className='qa' onClick={()=>{modalToggler2()}}>Edit QA's</button>
                <br/>
                <br/><br/>
                <button className='button' type='submit'>Update Project</button>
            </Form>

        </Formik>

    </div>
    <Modal isOpen={isModalOpen} toggle={()=>modalToggler()}>
        <ModalHeader toggle={()=>modalToggler()}>Edit Developers</ModalHeader>
        <ModalBody>
            <div>
                {freeUsers?.map(user=><AddDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleAddDeveloper}></AddDeveloperQa>)}
                {developers.map(user=><DeleteDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleDeleteDeveloper}></DeleteDeveloperQa>)}
            </div>
        </ModalBody>
    </Modal>
    <Modal isOpen={isModalOpen2} toggle={()=>modalToggler2()}>
        <ModalHeader toggle={()=>modalToggler2()}>Edit QA's</ModalHeader>
        <ModalBody>
            <div>
                {freeUsers?.map(user=><AddDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleAddQa}></AddDeveloperQa>)}
                {qas.map(user=><DeleteDeveloperQa userId={user.id} name={user.name} email={user.email} handleAddDeveloper={handleDeleteQa}></DeleteDeveloperQa>)}
            </div>
        </ModalBody>
    </Modal>
</div>
     );
}

export default EditProject;