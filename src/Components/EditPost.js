import {Formik,Field,Form} from "formik"
import './login.css'
import {useNavigate} from 'react-router-dom'

function PostForm(props) {
    const navigate=useNavigate()
    return ( 
<div className='postpage' >
    <div className='postcontainer'>
        <h1>Edit POST</h1>
        <br/>
        <Formik initialValues={{title:localStorage.getItem('title') ,body:localStorage.getItem('body')}} 
        onSubmit={(values)=>{
            if(window.confirm("Are you sure you want to update?"))
            {
                fetch(`https://reactappjsonserver.herokuapp.com/posts/${localStorage.getItem('id')}`,{
                method:'PATCH',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(values)
                }).then(()=>{
                    navigate('/main/myposts')
                })
            }
         }}
        >
            <Form>
                <label>Post Title</label><br/>
                <Field className="inputfield" name="title" type="text"  required />
                <br/><br/>
                <label>Body</label><br/>
                <Field className="body" name="body" Component="Text Field" required />
                <br/><br/>
                <button className='button' type='submit'>Update Post</button>
            </Form>

        </Formik>

    </div>
</div>
     );
}

export default PostForm;