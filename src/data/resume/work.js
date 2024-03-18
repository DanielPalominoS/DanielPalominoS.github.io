/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Escuela Colombiana de ingeniería Julio garavito',
    position: 'Instructor professor',
    url: 'https://www.escuelaing.edu.co/',
    startDate: '2022-01-01',
    summary: `Escuela Colombiana de Ingeniería is a private institution that offers undergraduate and graduate programs in engineering sciences under the hoghest quality standrds.
     As an instructor professor I have to complete tasks such as:`,
    highlights: [
      'Prepare material regarding electronics engineering basic knowledge.',
      'Design activities, exams and laboratory tasks to evaluate the students’ knowledge. To achieve this task physical and virtual tools are used.',
      'Provide feedback for the different tasks and activities completed by the students.',
      'Provide support to students in their learning process.',
    ],
  },
  {
    name: '',
    position: 'Freelancer',
    url: 'danielpalominos.github.io',
    startDate: '2017',
    summary: `I worked independently helipng people with their needs in projects or tasks related to robotics, electronics and mentoring (math, physics,etc).
    I also worked on personal projects tryiing to involve not only my previous knowledge, but also new technologies that get my attention.`,
    highlights: [
    ],
  },
  {
    name: 'Universidad del Cauca',
    position: 'Robotics with ROS course professor',
    url: 'https://www.unicauca.edu.co/',
    startDate: 'Oct 2023',
    endDate: 'Dic 2023',
    summary: `Unicauca is a public institution that offers undergraduate and graduate programs in divers fields.
     As an instructor professor I have to complete tasks such as:`,
    highlights: [
      'Planed, designed and produced support material regarding the subject, covering different areas of robotics.',
      'Designed guides and practical activities for the students, taking advantage of simulation and virtual resources.',
      'Evaluated students performance for the proposed activities and projects.',
      'Provided support to students in their learning process.',
    ],
  },
  {
    name: 'Universidad El Bosque',
    position: 'Electronics Developer and researcher',
    url: 'https://www.unicauca.edu.co/',
    startDate: 'Jul 2023',
    endDate: 'Nov 2023',
    summary: `The Ecological sanitation, Health and Environment research team 
    from Universidad El Bosque worked in a multidisciplinary project for the 
    development of a low cost Air Quality measurement device. As part of the 
    team, in regards of electronics I had following duties:`,
    highlights: [
      'Planed, designed and produced support material regarding the subject, covering different areas of robotics.',
      'Designed guides and practical activities for the students, taking advantage of simulation and virtual resources.',
      'Evaluated students performance for the proposed activities and projects.',
      'Provided support to students in their learning process.',
    ],
  },
  {
    name: 'Sofistic Cybersecurity',
    position: 'SOC Analyst',
    url: 'https://www.sofistic.com/en/',
    startDate: 'Feb 2023',
    endDate: 'Sept 2023',
    summary: `As part of 480 group, Sofistic specializes in offering novel and efficient
    cybsersecurity solutions for their clients, keeping clients operations safe 24/7.
    My activities as a SOC analyst include.`,
    highlights: [
      'Was in charge of monitoring, analysing and reporting possible threats detected by tools such as Darktrace, Crowdstrike, Exabeam and Microsoft Sentinel. ',
      'Worked and collaborated with team-members of different locations and time-zones to provide the best possible availability and quality service for the clients.',
      'Led meetings presented to clients in order to follow up pending tickets, as well as provide reports and recommendations regarding the operation to get a better security posture',
      'Provided training to clients in regards of the management and use of the tools/software',
    ],
  },
  {
    name: 'Millenium',
    position: 'Reasearch and development Engineer',
    url: 'https://millenium.com.co/',
    startDate: 'Mar 2020',
    endDate: 'Dece 2022',
    summary: `Thorugh more than 20 years of experience supporting the clients with effcient magament of their processes
    Millenium has stand out in the Colombian BPO market by offering cuting edge solutions in RPA/RDA, Contact Center, AI 
    and business intelligence (BI) having a mindset around digital transformation. As part of the research and development
    team (R&D) I had to face many challenges anc perform task like:`,
    // summary: `Más de 20 años de experiencia en el mercado Colombiano apoyando a
    //  nuestros aliados en la gestión eficiente de sus procesos. A través de nuestras
    //  soluciones en RPA/RDA, Contact Center, Inteligencia Artificial e Inteligencia
    //  de Negocios, somos la mejor opción para enfrentar los retos de la
    //  transformación digital.`,
    highlights: [
      'Supported and participated in the continuous development of hardware and software for robotics platforms and bio-metric access control, with a major focus in aerial vehicles',
      'Developed and deployed an aerial data acquisition system for semi-indoor environments (greenhouse) with centimeter positioning capacity whose collected data was used to feed AI Models',
      'Generated documentation associated with the developments and processes (repositories, manuals, technical documents).',
      'Managed and led the data acquisition operation using aerial robots within greenhouse environments',
      'Planned, generated and validated automated missions for the aerial system.',
      'Developed, monitored and maintained software tools to store data locally and in the cloud.',
      'Assembled,mainteined and fine tuned aerial vehicles, positioning and communication systems hardware.',
      'Instructed drone operators to manage the aerial vehicles.',
      'Conducted, research, exploration and testing process about state of the art techniques, algorithms and methodologies. for robotics, computer vision and natural language processing to improve the available company solutions. ',
    ],
  },
  {
    name: 'Escuela Colombina de ingeniería Julio Garavito',
    position: 'Graduated assistant',
    url: 'https://millenium.com.co/',
    startDate: 'Mar 2020',
    endDate: 'Dece 2022',
    summary: `Escuela Colombiana de Ingeniería is a private institution that offers undergraduate and graduate programs in engineering sciences under the hoghest quality standrds.
    I worked as graduated assistant while attending the master performing tasks such as:`,
    highlights: [
      'Designed and developed autonomous path‑planning algorithm for unmanned aerial vehicles in agricultural environments.',
      'Implemented computer vision techniques to identify agricultural environments using the Nvidia Jetson TX2 SBC.',
      'Perform Software in the loop (SIL) and Hardware in the loop (HIL) simulations for testing purposes.',
      'Supported the development of the university’s RoboCup project.',
      'Searched, adviced and supported the process of hardware selection for the robots components and environment.',
      'Developed, monitored and maintained software tools to store data locally and in the cloud.',
      'Developed software features for the robot team control software.',
    ],
  },
  // {
  //   name: 'Avantel (currently known as WOM)',
  //   position: 'Co-founder & C.T.O.',
  //   url: 'https://www.wom.co/fusion',
  //   startDate: '2014-01-01',
  //   endDate: '2022-01-01',
  //   summary: `job
  //   des`,
  //   highlights: [
  //     'highlight ',
  //     'highlight .',
  //   ],
  // },
];

export default work;
