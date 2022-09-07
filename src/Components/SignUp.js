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

    let addUser=(values)=>{
        fetch(' http://localhost:3000/users',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
            }).then(()=>{
                console.log("User is added")
            })
    }


    return ( <div className='loginpage'>
    <div className='signcontainer'>
        <h1>Sign Up</h1>
        <br/>
        <Formik initialValues={{name:"",email:"",password:""}} 
        onSubmit={(values)=>{
            getUsers()
            for(let x of users){
                if(x.email==values.email)
                {
                    alert("User with this account already exist")
                    return 0
                }
            }
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