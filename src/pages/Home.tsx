import {
    FunctionComponent,
} from 'react';
import { About }      from './About';
import { Contact }    from './Contact';
import { Experience } from './Experience';
import { Projects }   from './Projects';

interface Props {
}

export const Home: FunctionComponent<Props> = () => {
    return (
        <div className='section'>
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};
