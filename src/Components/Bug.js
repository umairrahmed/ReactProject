import React, { Component,useEffect,useState } from 'react';
import './Post.css'




function Bug(props) {
    const [isModalOpen,setIsModalOpen]=useState(false)

    
    return (
            <div className='postbox'   >
                <table className='posttable'>
                    <tr><td className='posttitle'><b>{props.title}</b></td><tc className='status'>{props.status}</tc></tr>
                    <tr><td className='postcontent'>{props.description}</td></tr>
                    <hr className='row'></hr>
                    <tr><td className='posttitle'><b>{props.userId}</b></td><tc className='deadline'>{props.deadline}</tc></tr>
                </table>
            </div>
     );
}


export default Bug;