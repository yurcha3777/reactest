import React, {Component} from 'react';
import {getPosts} from "../../service";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {props: []}
    }
    componentDidMount() {
        getPosts.getAll().then
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export {Post};