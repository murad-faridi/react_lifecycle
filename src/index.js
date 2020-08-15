import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

// COMPONENTS
import Home from './components/home'
import Posts from './components/posts'
import PostItem from './components/post_item.js'
import Profiles from './components/profiles'
import Lifecycle from './components/lifecycle'

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
                    <NavLink to="/lifecycle">Lifecycle</NavLink>
                    <hr />
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem} />
                    <Route path="/profiles" component={Profiles} />
                    <Route path="/lifecycle" component={Lifecycle} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    <Route render={() => <h3>Oops 404</h3>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(
    <App />, 
    document.querySelector('#root')
)