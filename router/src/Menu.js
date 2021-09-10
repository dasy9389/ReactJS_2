import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import './Menu.css';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <div>
                    <ul className='navbar'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>


                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/home'>
                            <Home />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Menu;
