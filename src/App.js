import './App.css';
import Users from "./components/users/Users";
import {getuserPosts} from "./service/user.service";
import {useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {
    let [posts, setPosts] = useState([]);
    const lift = (id) => {
        getuserPosts(id).then(({data}) => {
            setPosts([...data]);
        })
    }

    return (
        <div>
            <div>
                <Users lift={lift}/>
            </div>

            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;
