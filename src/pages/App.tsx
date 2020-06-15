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
import { Experiences }         from './Experiences';
import { Projects }            from './Projects';
import { Contact }             from './Contact';
import { Home }                from './Home';

export const App: FunctionComponent = () => {
    return (
        <Router>
            <NavBar />
            
            <Switch>
                <Route path='/about'        component={About} />
                <Route path='/experiences'  component={Experiences} />
                <Route path='/projects'     component={Projects} />
                <Route path='/contact'      component={Contact} />
                <Route path='/'             component={Home} />
            </Switch>
        </Router>
    );
};
