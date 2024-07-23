import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql, 
  coverhunt,
  dcc,
  kelhel,
  microverse,
  rpa,
  gestorRequerimientos,
  mobileDeveloper,
  konnex,
  oxify
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Robotic process automation (RPA)',
    icon: rpa,
  },
  {
    title: 'Mobile Developer',
    icon: mobileDeveloper,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Junior Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2017 - Aug 2018',
  },
  {
    title: 'Semi-senior Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2018 - Feb 2019',
  },
  {
    title: 'Leader Developer',
    company_name: 'Righttek',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2019 - Aug 2019',
  },
  {
    title: 'Semi-senior Developer',
    company_name: 'Sipecom',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2019 - Mar 2020',
  },
  {
    title: 'Ejecutivo I',
    company_name: 'Banco del Pacifico',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Mar 2020 - Aug 2021',
  },
  {
    title: 'Senior Developer',
    company_name: 'Sipecom',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2021 - May 2022',
  },
  {
    title: 'Technical Consultant - RPA ',
    company_name: 'Kruger',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Aug 2022',
  },
  {
    title: 'Leader Fronted - React ',
    company_name: 'Kruger',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Oct 2022',
  }, 
  {
    title: 'Full Stack Developer',
    company_name: 'Kruger',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Gestor Requerimientos',
    description: 'The objective of the tool is the different departments of the financial entity to solve thousands of internal requirements, allow the creation of requirements, Modify a form according to how they need it, Save the SLA of the attention of the ticket. Generate service report. Dashboard in real time.',
    tags: [
      {
        name: 'Asp.net c#',
        color: 'blue-text-gradient',
      },
      {
        name: 'ORACLE',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: gestorRequerimientos,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Konnex',
    description: 'During my tenure at Kruger, I had the privilege of contributing to the development of an innovative application designed to streamline access to a wide range of services, including mechanics, cleaning, locksmithing, plumbing, air conditioning, and painting. This application is distinguished by its ability to incorporate new services based on the providers who join and the services they choose to offer. The platform, dynamic by nature, simplifies the user process for registration, service requests, payments through multiple methods, service request inquiries, location registration, and receiving push notifications via Firebase and Google Maps. Furthermore, it allows for real-time tracking of each request status. Developed under a service-oriented business model, the application acts as a bridge between customers and registered service providers, ensuring an effective and secure interaction for all parties involved.',
    tags: [
      {
        name: 'Dart',
        color: 'blue-text-gradient',
      },
      {
        name: 'Flutter',
        color: 'green-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'postgress sql',
        color: 'pink-text-gradient',
      },
    ],
    image: konnex,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Oxify',
    description: 'During my tenure at Kruger, I had the privilege of contributing to the development of an innovative application web desined for contributions of projects forestal.',
    tags: [
      {
        name: 'Angular.js',
        color: 'blue-text-gradient',
      },      
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'PrimeNg',
        color: 'pink-text-gradient',
      },
    ],
    image: oxify,
    repo: '',
    demo: 'https://marketplace.oxify.earth/store',
  },

 
];

export { services, technologies, experiences, projects };
