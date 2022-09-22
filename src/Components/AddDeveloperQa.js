import React, { Component } from 'react';
import './AddDevloperQa.css'

function AddDeveloperQa(props) {
    return ( 
        <div className='addblock'>
            <div className='addtable'>
                <div>
                    <h><b>{props.name}</b></h>            
                </div>
                <div>    
                    <i onClick={()=>{props.handleAddDeveloper(props.userId)}} class="fas fa-plus addmember"></i>
                </div>
            </div>
            <h className='email'>{props.email}</h>
        </div>
     );
}

export default AddDeveloperQa;