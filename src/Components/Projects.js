import React, {  useEffect, useState } from 'react';
import './Posts.css'
import Project from './Project';

function Projects(props) {

    const [projects,setProjects]=useState( [])
    useEffect(()=>{
        fetch('http://localhost:3000/projects')
        .then(res=> { return res.json()})
        .then(projects=>{let data= projects.filter(project=>project.userID==localStorage.getItem('userId')); return data})
        .then(data=>{setProjects(data.reverse())})

    },[])
    // useEffect(()=>{
    //     // setProjects(projects?.filter(project=>project.userId==localStorage.getItem('userId')))
    //     projects.pop()
    //     setProjects(projects)
    // },[])
    
    return ( 
        <div className="postscontainer">

            {projects?.map(project=><Project id={project.id}  title={project.title} description={project.description} />)}
        </div>
     );
}

export default Projects;