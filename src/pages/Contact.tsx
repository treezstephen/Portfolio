import React, {
    FunctionComponent,
} from 'react';
import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';
import {
    FiMail,
} from 'react-icons/fi';
import {
    Divider,
} from 'antd';

export const Contact: FunctionComponent = () => {
    return (
        <div>
            <div className='page-header'>contact</div>
            
            <div className='article'>
                <div>Contact Me</div>
                <a href="mailto:scheung1206@gmail.com">
                    <div className="aligned">
                        <FiMail />
                        <Divider type='vertical'/>
                        scheung1206@gmail.com
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/scheung1206/">
                    <div className="aligned">
                        <FaLinkedin />
                        <Divider type='vertical'/>
                        LinkedIn
                    </div>
                </a>
                <a href="https://github.com/treezstephen">
                    <div className="aligned">
                        <FaGithub />   
                        <Divider type='vertical'/>
                        GitHub
                    </div>
                </a>
                <a href="https://www.instagram.com/stephen.cheung/">
                    <div className="aligned">
                        <FaInstagram />
                        <Divider type='vertical'/>
                        Instagram
                    </div>
                </a>
            </div>
        </div>
    );
};
