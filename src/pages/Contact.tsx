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
import { Title } from '../components/Title';

export const Contact: FunctionComponent = () => {
    return (
        <div className='section'>
            <div className='article centered'>
                <Title text='contact'/>
                <div className="contact">
                    <a href="mailto:scheung1206@gmail.com">
                        <div className="aligned">
                            <FiMail />
                            <div className='contact-text'>scheung1206@gmail.com</div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/scheung1206/">
                        <div className="aligned">
                            <FaLinkedin />
                            <div className='contact-text'>LinkedIn</div>
                        </div>
                    </a>
                    <a href="https://github.com/treezstephen">
                        <div className="aligned">
                            <FaGithub />   
                            <div className='contact-text'>GitHub</div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/stephen.cheung/">
                        <div className="aligned">
                            <FaInstagram />
                            <div className='contact-text'>Instagram</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
