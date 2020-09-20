import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

// lazy loading, only import when this AsyncNewPost be rendered
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                // activeClassName='my-active' //to customize the class name, default active class name is "active"
                                // activeStyle={{
                                //     color: 'pink',
                                //     textDecoration: 'underline'
                                // }} //to write the active styling inline
                                >
                                    Posts
                                    </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                >New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><div>home1</div>}/>
                <Route path="/" render={()=><p>home2</p>}/> */}

                {/* If not using switch, all matched route will be render; With Switch, only render the first matched route */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/*a route w/o a path => this will catch all routes that dont match any route above */}
                    <Route render={() => <h1>Not found</h1>} /> 
                    {/* <Redirect from="/" to="posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Route path="/:postId" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;