import React, {Component} from 'react';

import {Post} from "../post/Post";

import {ServiceFetchPost} from "../../service";

class Posts extends Component {

    state = { posts: [] }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.serviceFetchPost = new ServiceFetchPost();
        this.serviceFetchPost.getPosts().then(value => this.setState({posts: value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export {Posts};