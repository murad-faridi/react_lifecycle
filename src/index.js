import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

// COMPONENTS
import Home from './components/home'
import Posts from './components/posts'
import PostItem from './components/post_item.js'
import Profiles from './components/profiles'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to="/">Home</NavLink><br />
                    <NavLink 
                        to="/posts"
                        activeStyle={{color:'red'}}
                        activeClassName="selected"
                    >Posts</NavLink><br />
                    <NavLink to={{
                        pathname:'profiles',
                        hash:'#murad',
                        search:'?profile=true'
                    }}>Profiles</NavLink><br />
                    <hr />
                </header>
                <Route render={() => <h3>Oops 404</h3>} />
                <Route path="/" exact component={Home} />
                <Route path="/posts" component={Posts} />
                <Route path="/posts/:id" component={PostItem} />
                <Route path="/profiles" component={Profiles} />
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(
    <App />, 
    document.querySelector('#root')
)