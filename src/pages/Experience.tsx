/* eslint-disable react/jsx-no-target-blank */
import {
    FunctionComponent,
    useState,
} from 'react';
import { Title }           from '../components/Title';
import { EXPERIENCE_LIST } from '../constants/ExperienceConstants';

export const Experience: FunctionComponent = () => {

    const [experiences] = useState(EXPERIENCE_LIST);

    return (
        <div className='section'>

            <div className="article">
                <div className="experience">
                    <Title text='experience'/>
                    <div className="job-grid">

                        {
                            experiences.map(experience => {
                                const {
                                    company,
                                    duration,
                                    position,
                                    roles,
                                } = experience;

                                return (
                                    <div key={ experience.company.name } className="job-experience">
                                        <div className={`job-logo ${company.logo.isDark ? 'dark' : ''}`}>
                                            <img src={ company.logo.imagePath } />
                                        </div>
                                        <div className="job-info">
                                            <div className="job-company">
                                                <a href={ company.url } target='_blank'>
                                                    { company.name }
                                                </a>
                                            </div>
                                            <div className="job-role">
                                                {`${position}, ${duration}`}
                                            </div>
                                            <div className="job-location">
                                                {`${company.name}, ${company.state}`}
                                            </div>
                                            <div className="job-company-description">
                                                { company.description }
                                            </div>
                                            <div className="job-description">
                                                <ul>
                                                    {
                                                        roles.map(role => {
                                                            return (
                                                                <li key={role}>
                                                                    { role }
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>
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
