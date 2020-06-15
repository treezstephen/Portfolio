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
import { Experience }          from './Experience';
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
                        <Route path='/experience'   component={Experience} />
                        <Route path='/projects'     component={Projects} />
                        <Route path='/contact'      component={Contact} />
                        <Route path='/'             component={Home} />
                    </Switch>    
                </div>
            </div>
        </Router>
    );
};
