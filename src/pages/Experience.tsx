import React, {
    FunctionComponent,
} from 'react';
import { 
    Card,
    Divider,
    List,
} from 'antd';
import {
    DiJava,
    DiJavascript1,
    DiMysql,
    DiPostgresql,
    DiRuby,
    DiHtml5,
    DiJenkins,
    DiCss3,
    DiNodejs,
    DiJqueryLogo,
} from 'react-icons/di';
import { IconTag }    from '../components/IconTag';

const TOUR_MEGA_BULLETS = [
    'Full Stack web-development using Ruby on Rails.',
    'Redesigned checkout process leading to an increase in tour bookings.',
    'Setup Minitest framework to enable test driven development.',
    'Wrote importer to map partner’s tours into our application.',
];

const KUMON_BULLETS = [
    'Delegated and assigned responsibilities to other instructors in teaching up to 30 students at any given time.',
    'Managed the performance and progression of all my student.',
    'Responsible for teaching college level Calculus.',
];

export const Experience: FunctionComponent = () => {
    return (
        <div>
            <div className="page-header">experience</div>
            
            <div className="article">
                <Divider 
                    className   = 'experience-company'
                    orientation = 'left'
                >
                    <img src='/resources/images/treez.png'/>
                </Divider>
                <Card 
                    title = {
                        <div className='experience-job space-between'>
                            <div>Software Engineer @ Treez.io</div>
                            <div>Nov 2017 - Present</div>
                        </div>
                    }
                >
                    <List
                        header     = 'Treez is an enterprise software platform solution company for retailers in the cannabis space.'
                        dataSource = { TOUR_MEGA_BULLETS }
                        renderItem = { item => <List.Item>{item}</List.Item> }
                        size       = 'large'
                        footer     = {
                            <>
                                <IconTag Icon={ DiJavascript1 } />
                                <IconTag Icon={ DiJava } />
                                <IconTag Icon={ DiNodejs } />
                                <IconTag Icon={ DiMysql } />
                                <IconTag Icon={ DiPostgresql } />
                                <IconTag Icon={ DiJenkins } />
                                <IconTag Icon={ DiHtml5 } />
                                <IconTag Icon={ DiCss3 } />
                            </>
                        }
                    />
                </Card>
                
                <Divider 
                    className   = 'experience-company'
                    orientation = 'left'
                >
                    <img src='/resources/images/tourmega.png'/>
                </Divider>
                
                <Card 
                    title = {
                        <div className='experience-job space-between'>
                            <div>Software Engineering Intern @ TourMega</div>
                            <div>Jun 2017 - Nov 2017</div>
                        </div>
                    }
                >
                    <List
                        header     = 'TourMega is a search engine designed specifically for tours and activities around the world (Kayak for Tours and Activities).'
                        dataSource = { TOUR_MEGA_BULLETS }
                        renderItem = { item => <List.Item>{item}</List.Item> }
                        size       = 'large'
                        footer     = {
                            <>
                                <IconTag Icon={ DiRuby } />
                                <IconTag Icon={ DiJavascript1 } />
                                <IconTag Icon={ DiPostgresql } />
                                <IconTag Icon={ DiHtml5 } />
                                <IconTag Icon={ DiCss3 } />
                                <IconTag Icon={ DiJqueryLogo } />
                            </>
                        }
                    />
                </Card>
                
                <Divider 
                    className   = 'experience-company'
                    orientation = 'left'
                >
                    <img style={{backgroundColor: 'white'}} src='/resources/images/kumon.jpeg'/>
                </Divider>
                
                <Card 
                    title = {
                        <div className='experience-job space-between'>
                            <div>Lead Math Instructor @ Kumon Math & Reading</div>
                            <div>May 2015 - Nov 2017</div>
                        </div>
                    }
                >
                    <List
                        header     = 'Kumon learning centers for children specializes in nationwide after school math and reading programs for preschool students through 12th grade.'
                        dataSource = { KUMON_BULLETS }
                        renderItem = { item => <List.Item>{item}</List.Item> }
                        size       = 'large'
                    />
                </Card>        
            </div>
        
        </div>
    );
};
