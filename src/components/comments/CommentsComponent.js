import {useEffect, useState} from "react";

import CommentComponent from "./CommentComponent";

export default function CommentsComponent() {
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')

            .then(value => value.json())
            .then(value => setComments([...value]))
    },[])
    return (
        <div>
            {
                comments.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    );
}