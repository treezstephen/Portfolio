import React, {
    FunctionComponent,
} from 'react';
import { Title }     from '../components/Title';
import TreezLogo     from '../../resources/images/treez.png';
import TourMegaLogo  from '../../resources/images/tourmega.png';

const TREEZ_BULLETS = [
    'Full Stack web-development using Node, Java, TypeScript, React/Redux, MySQL, Postgres, etc.',
    'Integrated POS with third party state tracking system to allow clients to be compliant with state regulations.',
    'Utilize ElasticSearch to perform complex queries for inventory searching.',
    'Developed centralized microservices to expand product line in support multitenancy.',
    'Acted as main developer support to debug any production issues for over 150 clients.',
    'Built and designed inventory management modules improving client\'s workflows.',
    'Built both internal/external tools increasing supportability of the application.',
    'Developed a generic CRUD API using Java’s Reflection API to centralize Entity management.',
];

const TOUR_MEGA_BULLETS = [
    'Full Stack web-development using Ruby on Rails.',
    'Redesigned checkout process leading to an increase in tour bookings.',
    'Setup Minitest framework to enable test driven development.',
    'Wrote importer to map partner’s tours into our application.',
];

export const Experience: FunctionComponent = () => {
    return (
        <div className='section'>
            
            <div className="article">
                <div className="experience">
                    <Title text='experience'/>
                    <div className="job-grid">
                        <div className="job-experience">
                            <div className="job-logo">
                                <img src={ TreezLogo } />    
                            </div>
                            <div className="job-info">
                                <div className="job-company">
                                    <a href='https://treez.io/'>Treez</a>
                                </div>
                                <div className="job-role">
                                    Software Engineer, Since November 2017
                                </div>
                                <div className="job-location">
                                    Oakland, CA
                                </div>
                                <div className="job-company-description">
                                    Treez is an enterprise software platform solution company for retailers in the cannabis space.
                                </div>
                                <div className="job-description">
                                    <ul>
                                        {
                                            TREEZ_BULLETS.map(b => {
                                                return (
                                                    <li key={b}>
                                                        { b }
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div className="job-experience">
                            <div className="job-logo dark">
                                <img src={ TourMegaLogo }/>    
                            </div>
                            <div className="job-info">
                                <div className="job-company">
                                    <a href='https://www.tourmega.com/'>TourMega</a>
                                </div>
                                <div className="job-role">
                                    Software Engineering Intern, June 2017 - November 2017
                                </div>
                                <div className="job-location">
                                    Mountain View, CA
                                </div>
                                <div className="job-company-description">
                                    TourMega is a search engine designed specifically for tours and activities around the world (Kayak for Tours and Activities).
                                </div>
                                <div className="job-description">
                                    <ul>
                                        {
                                            TOUR_MEGA_BULLETS.map(b => {
                                                return (
                                                    <li key={b}>
                                                        { b }
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>    
                </div>
                
            </div>
        
        </div>
    );
};
