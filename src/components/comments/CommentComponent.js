import {Link} from "react-router-dom";

export default function CommentComponent({item})  {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <h4>{item.email} - {item.body}</h4>
            <span><Link to={item.id.toString()}>Post</Link></span>
        </div>
    );
}