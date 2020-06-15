import React, {
    FunctionComponent,
} from 'react';
import { 
    Card,
    Divider,
    PageHeader,
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
import { useHistory } from 'react-router';
import { IconTag }    from '../components/IconTag';

export const Experience: FunctionComponent = () => {
    const history = useHistory();
    
    return (
        <div className='section'>
            <PageHeader
                className = 'page-header'
                title =     'EXPERIENCE'
                onBack =    { () => history.push('/') } 
            />
            
            <Divider 
                className   = 'experience-company'
                orientation = 'left'
            >
                <img src='/resources/images/treez.png'/>
            </Divider>
            <Card 
                title = {
                    <div className='experience-job-title space-between'>
                        <div>SOFTWARE ENGINEER</div>
                        <div>NOV 2017 - PRESENT</div>
                    </div>
                }
            >
                <IconTag Icon={ DiJavascript1 } />
                <IconTag Icon={ DiJava } />
                <IconTag Icon={ DiNodejs } />
                <IconTag Icon={ DiMysql } />
                <IconTag Icon={ DiPostgresql } />
                <IconTag Icon={ DiJenkins } />
                <IconTag Icon={ DiHtml5 } />
                <IconTag Icon={ DiCss3 } />
            </Card>
            
            <Divider 
                className   = 'experience-company'
                orientation = 'left'
            >
                <img src='/resources/images/tourmega.png'/>
            </Divider>
            
            <Card 
                title = {
                    <div className='experience-job-title space-between'>
                        <div>SOFTWARE ENGINEER INTERN</div>
                        <div>JUN 2017 - NOV 2017</div>
                    </div>
                }
            >
                <IconTag Icon={ DiRuby } />
                <IconTag Icon={ DiJavascript1 } />
                <IconTag Icon={ DiPostgresql } />
                <IconTag Icon={ DiHtml5 } />
                <IconTag Icon={ DiCss3 } />
                <IconTag Icon={ DiJqueryLogo } />
            </Card>
        </div>
    );
};
