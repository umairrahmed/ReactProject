import React, {  useEffect, useState } from 'react';
import MyPost from './MyPost'
import './Posts.css'

function Posts(props) {

    const [posts,setPosts]=useState( [])
    const [users,setUsers]=useState( [])

    useEffect(()=>{
        fetch('https://reactappjsonserver.herokuapp.com/posts')
        .then(res=> { return res.json()})
        .then(posts=>{   let post= posts.filter(post=>post.userId===localStorage.getItem('userId')); return post})
        .then(data=>{setPosts(data)})

        fetch('https://reactappjsonserver.herokuapp.com/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    },[])
    
    
    return ( 
        <div className="postscontainer">

            {posts.map(post=><MyPost id={post.id} userId={users[post.userId]?.name} title={post.title} body={post.body} />)}
        </div>
     );
}

export default Posts;