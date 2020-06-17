import React, {
    FunctionComponent,
} from 'react';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaRegFolderOpen,
} from 'react-icons/fa';


export const Projects: FunctionComponent = () => {
    
    return (
        <div className='projects'>
            <div className="page-header">projects</div>
            
            <div className="article grid">
                <div className="tile">
                    <div className="tile-header">
                        <div className="project-icon">
                            <FaRegFolderOpen />
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/treezstephen/PinIt">
                                <FaGithub />
                            </a>
                            <a href="https://pin-it-165.herokuapp.com/">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-title">
                            PinIt
                        </div>
                        <div className="project-description">
                            PinIt is a Pinterest like application, where users can share their life moments. 
                            Goal of PinIt is to make a customizable canvas for users to show their unique interests.
                        </div>
                    </div>
                    <div className="project-footer">
                        <div className="technology">Ruby on Rails</div>
                        <div className="technology">SQLite</div>
                        <div className="technology">Heroku</div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-header">
                        <div className="project-icon">
                            <FaRegFolderOpen />
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/treezstephen/materialsApp">
                                <FaGithub />
                            </a>
                            <a href="https://materialsapp-d28fb.firebaseapp.com/">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-title">
                            MaterialsApp
                        </div>
                        <div className="project-description">
                        MaterialsApp is a web application to spread details of the hazards of common construction materials. This application integrates Quartzproject's database.
                        </div>
                    </div>
                    <div className="project-footer">
                        <div className="technology">TypeScript</div>
                        <div className="technology">Firebase</div>
                        <div className="technology">QuartzProject</div>
                    </div>
                </div>
                <div className="tile">
                    <div className="tile-header">
                        <div className="project-icon">
                            <FaRegFolderOpen />
                        </div>
                        <div className="project-links">
                            <div/>
                            <a href="https://github.com/treezstephen/JumpinStory">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div className="project-body">
                        <div className="project-title">
                            JumpinStory
                        </div>
                        <div className="project-description">
                        2D game made using OpenGL to simulate a jump quest in Maplestory. Goal of the game is to complete this jump quest and escape using the Taxi.
                        </div>
                    </div>
                    <div className="project-footer">
                        <div className="technology">Java</div>
                        <div className="technology">OpenGL</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
