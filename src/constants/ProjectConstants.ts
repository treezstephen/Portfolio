export interface Project {
    description:  string;
    gitUrl:       string;
    projectUrl?:  string;
    technologies: string[];
    title:        string;
    
}

export const PROJECT_LIST: Project[] = [
    {
        description:  'Learning Auth0 through a sample API project using Node.js, Express, and TypeScript.',
        gitUrl:       'https://github.com/treezstephen/Auth0-Express-TypeScript-Example/',
        technologies: ['Auth0', 'Node.js', 'Express', 'TypeScript'],
        title:        'Auth0-Express-TypeScript',
    },
    {
        description:  'PinIt is a Pinterest like application, where users can share their life moments. Goal of PinIt is to make a customizable canvas for users to show their unique interests.',
        gitUrl:       'https://github.com/treezstephen/PinIt',
        projectUrl:   'https://pin-it-165.herokuapp.com/',
        technologies: ['Ruby on Rails', 'SQLite', 'Heroku'],
        title:        'PinIt',
    },
    {
        description:  'MaterialsApp is a web application to spread details of the hazards of common construction materials. This application integrates QuartzProject\'s database.',
        gitUrl:       'https://github.com/treezstephen/materialsApp',
        projectUrl:   'https://materialsapp-d28fb.firebaseapp.com/',
        technologies: ['TypeScript', 'Firebase', 'QuartzProject'],
        title:        'MaterialsApp',
    },
    {
        description:  '2D game made using OpenGL to simulate a jump quest in Maplestory. Goal of the game is to complete this jump quest and escape using the Taxi.',
        gitUrl:       'https://github.com/treezstephen/JumpinStory',
        technologies: ['Java', 'OpenGL'],
        title:        'JumpinStory',
    },
];
