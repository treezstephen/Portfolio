import React, {
    FunctionComponent
}                      from 'react';
import { Layout }      from '../styles/app';
import { About }       from './About';
import { Experiences } from './Experiences';
import { Projects }    from './Projects';
import { Contact }     from './Contact';

export const App: FunctionComponent = () => {
    return (
        <div style={ Layout }>
            <About />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
};
