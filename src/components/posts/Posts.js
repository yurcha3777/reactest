import React, {Component} from 'react';
import {getPosts} from "../../service";
import {Post} from "../post/Post";

class Posts extends Component {
    state = {posts: [],user: {}}
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.userApiService = new this.userApiService();
        this.userApiService.getPosts().then(value => this.setState({users: value}))
    }

    render() {
        return (
            <div>
                {
                    <Post item={this.state.posts} key={post.id}/>
                }
            </div>
        );
    }
}

export {Posts};