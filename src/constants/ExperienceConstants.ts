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
        position: 'Software Engineer',
        roles:    [
            'Full Stack web-development using Node, Java, TypeScript, React/Redux, MySQL, Postgres, etc.',
            'Integrated POS with third party state tracking system to allow clients to be compliant with state regulations.',
            'Utilize ElasticSearch to perform complex queries for inventory searching.',
            'Developed centralized microservices to expand product line in support multitenancy.',
            'Acted as main developer support to debug any production issues for over 150 clients.',
            'Built and designed inventory management modules improving client\'s workflows.',
            'Built both internal/external tools increasing supportability of the application.',
            'Developed a generic CRUD API using Java’s Reflection API to centralize Entity management.',
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
