import React, {  useEffect, useState } from 'react';
import {Formik,Field,Form} from "formik"
import './login.css'
import {useNavigate} from 'react-router-dom'

function SignIn(props) {

    const [users,setUsers]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    },[])
    return ( <div className='loginpage'>
    <div className='signcontainer'>
        <h1>Sign In</h1>
        <br/>
        <Formik initialValues={{email:"",password:""}} 
        onSubmit={(values)=>{
            for(let x of users){
                if(x.email==values.email && x.password==values.password )
                {
                    localStorage.setItem('userId',x.id)
                    navigate('/main')
                    return
                }
            }
            alert("Invalid")
        }}
        >
            <Form>
                <label>Email</label><br/>
                <Field className="inputfield" name="email" type="email" required />
                <br/><br/>
                <label>Password</label><br/>
                <Field className="inputfield" name="password" type="password" required />
                <br/><br/><br/>
                <button className='button' type='submit'>Sign In</button>
                <br/><br/><br/>
            </Form>
        </Formik>
        <h className="createaccount" onClick={()=>props.handleChange()}><u>createaccount</u></h>
    </div>
</div>  );
}

export default SignIn;

// class SignIn extends Component {
//     state(
        
//     )
//     render() {
//         return <div className='loginpage'>
//             <div className='signcontainer'>
//                 <h1>Sign In</h1>
//                 <br/>
//                 <Formik initialValues={{email:"",password:""}} 
//                 onSubmit={(values)=>{alert(JSON.stringify(values, null, 2))}}
//                 >
//                     <Form>
//                         <label>Email</label><br/>
//                         <Field className="inputfield" name="email" type="email" required />
//                         <br/><br/>
//                         <label>Password</label><br/>
//                         <Field className="inputfield" name="password" type="password" required />
//                         <br/><br/><br/>
//                         <button type='submit'>Sign In</button>
//                         <br/><br/><br/>
//                     </Form>
//                 </Formik>
//                 <h className="createaccount" onClick={()=>this.props.handleChange()}><u>createaccount</u></h>
//             </div>
//         </div> 
//     }
// }
 
// export default SignIn;