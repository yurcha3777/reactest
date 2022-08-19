import CommentsComponent from "../components/comments/CommentsComponent";

import {Outlet} from "react-router-dom";
export default function CommentsPage(props) {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}