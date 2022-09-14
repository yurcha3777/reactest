import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layouts from "./layouts/Layouts";

import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsComment from "./components/posts/PostsComment";

function App() {
    return (
        <div>
                <Routes>
                    <Route path={'/'} element={<Layouts/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}>
                            <Route path={':postId'} element={<PostsComment/>}/>
                        </Route>
                    </Route>
                </Routes>
        </div>
    );
}

export default App;
