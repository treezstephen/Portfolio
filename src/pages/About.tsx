/* eslint-disable react/jsx-no-target-blank */
import React, {
    FunctionComponent,
} from 'react';
import {
    FaFileAlt,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';
import Resume    from '../../resources/files/resume_stephen_cheung.pdf';

const ABOUT_TEXT = 'My name is Stephen Cheung, Software Engineer at Treez.io. I am a Full-stack developer based in the Bay Area. Coding for curiosity is a motto I have adopted in this evolving world of software development. Whether for work or for a hobby, adding new technology to my arsenal is always a treat. Let\'s work on the next big project together. Connect with me with my channels below.';

export const About: FunctionComponent = () => {
    return (
        <div className='section'>
            <div className='article centered'>
                <div className="bio-header">
                    <div className='bio-title'>
                        Software Engineer
                    </div>
                </div>
                <div className='biography'>
                    { ABOUT_TEXT }    
                </div>
                <div className='channels'>
                    <a href="https://www.linkedin.com/in/scheung1206/">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/treezstephen">
                        <FaGithub />    
                    </a>
                    <a href="https://www.instagram.com/stephen.cheung/">
                        <FaInstagram />    
                    </a>
                    <a href={ Resume } target='_blank'>
                        <FaFileAlt />    
                    </a>
                </div>
            </div>
        </div>
    );
};
