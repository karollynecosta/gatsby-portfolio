import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Karollyne  | Developer', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: 'Bem-vindo ao meu primeiro Portfólio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'FullStack',
  name: 'Karollyne Costa',
  subtitle: 'Desenvolvedora Jr em JavaScript.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Estudante de Desenvolvimento FullStack',
  paragraphTwo:
    '25 anos, graduada em Gestão de TI e Pós-Graduada em Gestão e Segurança de Redes de Computadores. Há cerca de 2 anos foquei meus estudos em desenvolvimento web, desenvolvendo novas habilidates com novas tecnologias.',
  paragraphThree: 'Humildade para aprender, altivez para conquistar os objetivos.',
  resume: 'https://github.com/karollynecosta', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gobarber.jpg',
    title: 'ReactJS',
    info:
      'Projeto desenvolvido na plataforma de estudos Rocketseat, onde são aplicados as ultimas atualizações da tecnologia, com backend em NodeJS',

    url: '',
    repo: 'https://github.com/karollynecosta/gobarber', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tdd.jpg',
    title: 'Test Driven Development',
    info:
      'O estudo do Desenvolvimento Orientado por Testes(TDD) demonstra que é possível sim entregar um projeto sem surpresas em relação as funcionalidades.',
    url: '',
    repo: 'https://github.com/karollynecosta?tab=repositories', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'karolcosta2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_karolcosta/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/karollyne-costa-2a185aa7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/karollynecosta',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
