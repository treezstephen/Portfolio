/* eslint-disable react/jsx-no-target-blank */
import React, {
    FunctionComponent, useState,
} from 'react';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaRegFolderOpen,
} from 'react-icons/fa';
import { Title }        from '../components/Title';
import { PROJECT_LIST } from '../constants/ProjectConstants';


export const Projects: FunctionComponent = () => {
    
    const [projects] = useState(PROJECT_LIST);
    
    return (
        <div className='section'>
            <div className="article">
                <Title text='projects'/>
                
                <div className="projects">
                    <div className="grid">
                        {
                            projects.map(project => {
                                return (
                                    <div className="tile" key={ project.title }>
                                        <div className="tile-header">
                                            <div className="project-icon">
                                                <FaRegFolderOpen />
                                            </div>
                                            <div className="project-links">
                                                {
                                                    project.projectUrl
                                                        ?   <a href={ project.projectUrl } target='_blank'><FaExternalLinkAlt /></a>
                                                        :   <div/>
                                                }
                                                <a href={ project.gitUrl } target='_blank'>
                                                    <FaGithub />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-body">
                                            <div className="project-title">
                                                { project.title }
                                            </div>
                                            <div className="project-description">
                                                { project.description }
                                            </div>
                                        </div>
                                        <div className="project-footer">
                                            {
                                                project.technologies.map(technology => (
                                                    <div key={ project.title + technology } className="technology">{ technology }</div>
                                                ))
                                            }
                                        </div>
                                    </div>            
                                );
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
};
