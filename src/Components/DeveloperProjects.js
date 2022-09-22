import React, {  useEffect, useState } from 'react';
import './Posts.css'
import DeveloperProject from './DeveloperProject';

function DeveloperProjects(props) {

    const [projects,setProjects]=useState( null)
    useEffect(()=>{
        fetch('http://localhost:3000/projects')
        .then(res=> { return res.json()})
        .then(projects=>{let data=projects.filter(project=>project.developers.includes(parseInt    (localStorage.getItem('userId')))); return data})
        .then(data=>{setProjects(data.reverse())})
        // .then(()=>setProjects(projects.filter(project=>project.userId==localStorage.getItem('userId'))))

    },[])
    
    // useEffect(()=>{
    //     // setProjects(projects?.filter(project=>project.userId==localStorage.getItem('userId')))
    //     projects.pop()
    //     setProjects(projects)
    // },[])
    
    return ( 
        <div className="postscontainer">

            {projects?.map(project=><DeveloperProject id={project.id}  title={project.title} description={project.description} />)}
        </div>
     );
}

export default DeveloperProjects;