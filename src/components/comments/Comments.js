import React, {Component} from 'react';

import {ServiceFetchPost} from "../../service";

import {Comment} from "../comment/Comment";

class Comments extends Component {
    state = {comments: []}

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.serviceFetchPost = new ServiceFetchPost();
        this.serviceFetchPost.getComments().then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => <Comment key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export {Comments};