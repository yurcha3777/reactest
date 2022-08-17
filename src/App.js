import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layouts from "./layouts/Layouts";
import TodosComponent from "./components/todos/TodosComponent";
import AlbumsComponent from "./components/albums/AlbumsComponent";
import CommentsComponent from "./components/comments/CommentsComponent";
import PostsComment from "./components/posts/PostsComment";

function App() {
    return (
        <div>>
                <Routes>
                    <Route path={'/'} element={<Layouts/>}>
                        <Route path={'todos'} element={<TodosComponent/>}/>
                        <Route path={'albums'} element={<AlbumsComponent/>}/>
                        <Route path={'comments'} element={<CommentsComponent/>}>
                            <Route path={':postId'} element={<PostsComment/>}/>
                        </Route>
                    </Route>
                </Routes>
        </div>
    );
}

export default App;
