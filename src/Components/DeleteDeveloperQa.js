import React, { Component } from 'react';
import './AddDevloperQa.css'

function DeleteDeveloperQa(props) {
    return ( 
        <div className='addblock'>
            <div className='addtable'>
                <div>
                    <h><b>{props.name}</b></h>            
                </div>
                <div>    
                    <i onClick={()=>{props.handleAddDeveloper(props.userId)}} class="fas fa-trash removemember"></i>
                </div>
            </div>
            <h className='email'>{props.email}</h>
        </div>
     );
}

export default DeleteDeveloperQa;