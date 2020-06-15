import React, {
    FunctionComponent,
}                              from 'react';
import { Layout }              from '../styles/app';
import { NavBar }              from '../components/NavBar';
import { About }               from './About';
import { Experiences }         from './Experiences';
import { Projects }            from './Projects';
import { Contact }             from './Contact';

export const App: FunctionComponent = () => {
    return (
        <div style={ Layout }>
            <NavBar />
            {/* <About />
            <Experiences />
            <Projects />
            <Contact /> */}
        </div>
    );
};
