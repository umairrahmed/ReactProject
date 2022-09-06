import Post from "./Post";
import React, {  useEffect, useState } from 'react';
import './Posts.css'

function Posts(props) {

    const [posts,setPosts]=useState( [])
    const [users,setUsers]=useState( [])

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res=> { return res.json()})
        .then(data=>{setPosts(data)})

        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})
    },[])

    
    return ( 
        <div className="postscontainer">

            {posts.map(post=><Post id={post.id} userId={users[post.userId-1]?.name} title={post.title} body={post.body} />)}
        </div>
     );
}

export default Posts;