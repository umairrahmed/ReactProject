import React, { Component,useEffect,useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import Post from './Project';
import Bug from './Bug';

function WholeProject() {
    const [project,setProject]=useState( [])
    const [users,setUsers]=useState( [])
    const [bugs,setBugs]=useState( [])
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{
        fetch(`http://localhost:3000/projects/${localStorage.getItem('projectId')}`)
        .then(res=> { return res.json()})
        .then(data=>{setProject(data)})

        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})

        fetch('http://localhost:3000/bugs')
        .then(res=> { return res.json()})
        .then(bugs=>{   let bug= bugs.filter(bug=>bug.projectID===localStorage.getItem('projectId')); return bug})
        .then(data=>{setBugs(data)})
    },[])
    return ( 
        <div >
            <div className='alonePost'>
            <div className='postbox' >
            <table className='posttable'>
                <div>
                    <tr><td className='posttitle'><b>{project.title}</b></td></tr>
                    <tr><td className='postcontent'>{project.description}</td></tr>
                </div>
                <hr className='row'></hr>
            </table>
        </div>
            </div>
            <hr/>
            <h1 className='commentHeading'>Bugs:</h1>
            <div className='commentscontainer'>
                {bugs.map(bug=><Bug id={bug.id} status={bug.status} deadline={bug.deadline} userId={users[bug.userID-1]?.name} projectId={bug.projectID} title={bug.title} description={bug.description} />)}
            </div>

        </div>
     );
}

export default WholeProject;