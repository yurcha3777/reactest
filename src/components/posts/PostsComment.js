import {useParams} from "react-router-dom";

import {useEffect, useState} from "react";

import PostComment from "./PostComment";

export default function PostsComment() {
    const {postId} = useParams();
   const [post,setPost] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {setPost(value)})
    },[postId])

    return (
        <div>
            {
                 <PostComment item={post} key={post.id}/>
            }
        </div>
    );
}