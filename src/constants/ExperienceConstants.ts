import TreezLogo     from '../../resources/images/treez.png';
import TourMegaLogo  from '../../resources/images/tourmega.png';

interface Logo {
    imagePath: string;
    isDark?:    boolean;
}

interface Company {
    city:        string;
    description: string;
    logo:        Logo;
    name:        string;
    state:       string;
    url:         string;
}

interface Experience {
    roles:  string[];
    company:  Company;
    duration: string;
    position:     string;
}

export const EXPERIENCE_LIST : Experience[] = [
    {
        company: {
            city:        'Oakland',
            description: 'Treez is an enterprise software platform solution company for retailers in the cannabis space.',
            logo:        {
                imagePath: TreezLogo,
            },
            name:  'Treez',
            state: 'CA',
            url:   'https://treez.io/',
        },
        duration: 'Since November 2017',
        position: 'Senior Software Engineer',
        roles:    [
            'Developed full-stack applications using Node.js, Java, TypeScript, React/Redux, AWS, MySQL, PostgreSQL, and more.',
            'Designed and implemented integration with state compliance tracking systems (Metrc and BioTrack), enabling clients to meet regulatory requirements in real time.',
            'Managed reliable and scalable data transfer between distributed systems via APIs, event-driven architecture, and message queues.',
            'Provided on-call support across multiple teams and domains, ensuring high availability, rapid incident response, and cross-functional production issue resolution.',
            'Led teams in Scrum ceremonies and architecture design, promoting cross-team collaboration, stakeholder alignment, and delivery of scalable, maintainable solutions.',
            'Experienced in decomposing monolithic applications into microservices to enhance scalability, resilience, and deployment agility.',
            'Embraces a startup mindset by moving quickly, making practical tradeoffs, and focusing on delivering value to clients and the business.'
        ],
    },
    {
        company: {
            city:        'Mountain View',
            description: 'TourMega is a search engine designed specifically for tours and activities around the world (Kayak for Tours and Activities).',
            logo:        {
                imagePath: TourMegaLogo,
                isDark:    true,
            },
            name:  'TourMega',
            state: 'CA',
            url:   'https://www.tourmega.com/',
        },
        duration: 'June 2017 - November 2017',
        position: 'Software Engineering Intern',
        roles:    [
            'Full Stack web-development using Ruby on Rails.',
            'Redesigned checkout process leading to an increase in tour bookings.',
            'Setup Minitest framework to enable test driven development.',
            'Wrote importer to map partner’s tours into our application.',
        ],
    },
];
