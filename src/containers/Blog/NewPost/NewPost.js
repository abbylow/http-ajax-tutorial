import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        // axios will stringify second argument to JSON 
        axios.post('/posts/', post)
            .then(response => {
                console.log(response);
                // this.setState({ submitted: true }); //replace the current page (so after redirecting, won't go back to this component)
                // this.props.history.push('/posts'); //push this new route to the stack, so can go back to this component
                this.props.history.replace('/posts'); //replace the current route, same with redirect
            });
    }

    render() {
        let redirect = null;
        if(this.state.submitted){
            {/* Cannot specify the from prop when the Redirect is used outside of Switch */}
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;