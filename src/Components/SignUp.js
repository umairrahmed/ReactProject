import React, { Component, useState } from 'react';
import {Formik,Field,Form} from "formik"
import './login.css'
import {useNavigate} from 'react-router-dom'



function SignUp(props) {

    const[users,setUsers]=useState(null)
    const navigate=useNavigate()

    let getUsers=()=>{
        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    }
    localStorage.clear()

    let addUser=(values)=>{
        fetch(' http://localhost:3000/users',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
            }).then(()=>{
                alert("User is added")
            })
    }


    return ( <div className='loginpage'>
    <div className='signcontainer'>
        <h1>Sign Up</h1>
        <br/>
        <Formik initialValues={{name:"",email:"",password:"",role:""}} 
        onSubmit={(values)=>{
            getUsers()
            for(let x of users){
                if(x.email==values.email && x.role==document.getElementById('role').value)
                {
                    alert("User with this account already exist")
                    return 0
                }
            }
            values.role=document.getElementById('role').value
            addUser(values)
        
            props.handleChange()
            
         }}
        >
            <Form>
                <label>UserName</label><br/>
                <Field className="inputfield" name="name" type="text"  required />
                <br/><br/>
                <label>Email</label><br/>
                <Field className="inputfield" name="email" type="email" required />
                <br/><br/>
                <label>Password</label><br/>
                <Field className="inputfield" name="password" type="password" required/>
                <br/><br/>
                <label>Role</label><br/>
                <select className='inputfield' id='role' name="role" required>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="manager">Project Manager</option>
                    <option value="developer">Developer</option>
                    <option value="qa">QA</option>

                </select>
                <br/><br/><br/>
                <button className='button' type='submit'>Sign Up</button>
            </Form>

        </Formik>
        <br/><br/>
        <h className="createaccount" onClick={()=>props.handleChange()}><u>SignIn</u></h>

    </div>
</div>  );
}

export default SignUp;


// class SignUp extends Component {
//     render() {
//         return <div className='loginpage'>
//             <div className='signcontainer'>
//                 <h1>Sign Up</h1>
//                 <br/>
//                 <Formik initialValues={{name:"",email:"",password:""}} 
//                 onSubmit={(values)=>{
//                     fetch(' http://localhost:3000/users',{
//                         method:'POST',
//                         headers:{"Content-Type":"application/json"},
//                         body:JSON.stringify(values)
//                     }).then(()=>{
//                         console.log("User is added")
//                     })
//                  }}
//                 >
//                     <Form>
//                         <label>UserName</label><br/>
//                         <Field className="inputfield" name="name" type="text"  required />
//                         <br/><br/>
//                         <label>Email</label><br/>
//                         <Field className="inputfield" name="email" type="email" required />
//                         <br/><br/>
//                         <label>Password</label><br/>
//                         <Field className="inputfield" name="password" type="password" required />
//                         <br/><br/><br/>
//                         <button type='submit'>Sign Up</button>
//                     </Form>

//                 </Formik>
//                 <br/><br/>
//                 <h className="createaccount" onClick={()=>this.props.handleChange()}><u>SignIn</u></h>

//             </div>
//         </div> 
//     }
// }
 
// export default SignUp;