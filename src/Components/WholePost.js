import React, { Component,useEffect,useState} from 'react';
import Post from './Post';
import Comment from './Comment';

function WholePost() {
    const [posts,setPosts]=useState( [])
    const [users,setUsers]=useState( [])
    const [comments,setComments]=useState( [])
    useEffect(()=>{
        fetch(`http://localhost:3000/posts/${localStorage.getItem('postId')}`)
        .then(res=> { return res.json()})
        .then(data=>{setPosts(data)})

        fetch('http://localhost:3000/users')
        .then(res=> { return res.json()})
        .then(data=>{setUsers(data)})

        fetch('http://localhost:3000/comments')
        .then(res=> { return res.json()})
        .then(comments=>{   let comment= comments.filter(comment=>comment.postId===localStorage.getItem('postId')); return comment})
        .then(data=>{setComments(data)})
    },[])
    return ( 
        <div >
            <div className='alonePost'>
            <Post id={posts.id} userId={users[posts.userId-1]?.name} title={posts.title} body={posts.body} />
            </div>
            <hr/>
            <h1 className='commentHeading'>Comments:</h1>
            <div className='commentscontainer'>
                {comments.map(comment=><Comment id={comment.id} userId={users[comment.userId-1]?.name} postId={comment.postId} body={comment.body} />)}
            </div>

        </div>
     );
}

export default WholePost;