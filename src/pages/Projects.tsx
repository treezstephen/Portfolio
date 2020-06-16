import React, {
    FunctionComponent,
} from 'react';
import { Card, Col, Row } from 'antd';
import {
    FaGithub,
    FaExternalLinkAlt,
} from 'react-icons/fa';


export const Projects: FunctionComponent = () => {
    return (
        <div>
            <div className="page-header">projects</div>
            
            <div className="article">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card 
                            className='project-card'
                            title='PinIt'
                            actions={[
                                <a className='project-link' key={'pinit-app'} href="https://pin-it-165.herokuapp.com/">
                                    <FaExternalLinkAlt />
                                </a>,
                                <a className='project-link' key={'pinit-git'} href="https://github.com/treezstephen/PinIt">
                                    <FaGithub />
                                </a>,
                            ]}
                        >
                            PinIt is a Pinterest like application, where users can share their life moments. 
                            Goal of PinIt is to make a customizable canvas for users to show their unique interests.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card 
                            title='MaterialsApp'
                            actions={[
                                <a className='project-link' key={'material-app'} href="https://materialsapp-d28fb.firebaseapp.com/">
                                    <FaExternalLinkAlt />
                                </a>,
                                <a className='project-link' key={'material-git'} href="https://github.com/treezstephen/materialsApp">
                                    <FaGithub />
                                </a>,
                            ]}
                        >
                            MaterialsApp is a web application to spread details of the hazards of common construction materials. This application integrates Quartzproject's database.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card 
                            title='JumpinStory'
                            actions={[
                                <a className='project-link' key={'jumpinstory-git'} href="https://github.com/treezstephen/JumpinStory">
                                    <FaGithub />
                                </a>,
                            ]}
                        >
                            2D game made using OpenGL to simulate a jump quest in Maplestory. Goal of the game is to complete this jump quest and escape using the Taxi.
                        </Card>
                    </Col>
                </Row>
                
            </div>
        </div>
    );
};
