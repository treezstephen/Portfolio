import React, {
    FunctionComponent,
} from 'react';
import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';

const ABOUT_TEXT = 'My name is Stephen Cheung, Software Engineer at Treez.io. Coding for curiosity is a motto I have adopted in this evolving world of software development. Whether for work or for a hobby, adding new technology to my arsenal is always a treat. Let\'s work on the next big project together. Connect with me with my channels below.';
const ABOUT_SUBTITLE_TEXT = 'Full-stack developer based in the Bay Area';

export const About: FunctionComponent = () => {
    return (
        <div>
            <div className='page-header'>about</div>
            <div className='article centered'>
                <div className="bio-header">
                    <div className='title'>
                        Software Engineer
                    </div>
                    <div className="subtitle">
                        { ABOUT_SUBTITLE_TEXT }
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
                </div>
            </div>
        </div>
    );
};
