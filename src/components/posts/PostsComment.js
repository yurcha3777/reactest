import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PostComment from "./PostComment";

export default function PostsComment() {
    const {postId} = useParams();
   const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(value => value.json())
            .then(value => {setPosts([{...value}])
            } )
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComment item={value} key={value.id}/>)
            }
        </div>
    );
}