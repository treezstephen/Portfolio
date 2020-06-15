import React, {
    FunctionComponent, 
}                              from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { NavBar }              from '../components/NavBar';
import { About }               from './About';
import { Contact }             from './Contact';
import { Experiences }         from './Experiences';
import { Home }                from './Home';
import { Projects }            from './Projects';

export const App: FunctionComponent = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <div className="section">
                    <Switch>
                        <Route path='/about'        component={About} />
                        <Route path='/experiences'  component={Experiences} />
                        <Route path='/projects'     component={Projects} />
                        <Route path='/contact'      component={Contact} />
                        <Route path='/'             component={Home} />
                    </Switch>    
                </div>
            </div>
        </Router>
    );
};
