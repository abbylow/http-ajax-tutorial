import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    state = {
        auth: false
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
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="posts" />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Route path="/:postId" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;