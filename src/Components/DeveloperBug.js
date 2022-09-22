import React, { Component,useEffect,useState } from 'react';
import './Post.css'
import {useNavigate,useLocation} from 'react-router-dom'





function DeveloperBug(props) {
    const [isModalOpen,setIsModalOpen]=useState(false)
    const location=useLocation()
    const updateStatus=()=>{
        if(props.status=="Pending"){
        if(window.confirm("Are you sure you want to update?"))
            {
                const values={}
                values.status="Resolved"
                fetch(`http://localhost:3000/bugs/${props.id}`,{
                method:'PATCH',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
                })
                window.location.reload()

            }
        }
    }
    
    return (
            <div className='postbox'   >
                <table className='posttable'>
                    <tr><td className='posttitle'><b>{props.title}</b></td><tc className='status'>STATUS:{props.status}</tc></tr>
                    <tr><td className='postcontent'>{props.description}</td></tr>
                    <hr className='row'></hr>
                    <tr><td className='posttitle'><b>{props.userId}</b></td><tc className='deadline'>DEADLINE:{props.deadline}</tc></tr>
                    <tr><button className='button updatebutton' onClick={()=>{updateStatus()}}>Update Status</button></tr>
                </table>
            </div>
     );
}


export default DeveloperBug;