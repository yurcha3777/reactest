import Header from "../components/header/Header";

import {Outlet} from "react-router-dom";

export default function Layouts() {
    return (
        <div>
            <Header/>
            <h2>Content</h2>
            <Outlet/>
        </div>
    );
}