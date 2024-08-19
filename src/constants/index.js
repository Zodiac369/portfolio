import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `En tant que développeur full stack, je suis passionné par la création d'applications web robustes et évolutives. Avec 2 ans d'expérience pratique, j'ai perfectionné mes compétences dans les technologies front comme React, Next.js et Angular, ainsi que dans les technologies back, notamment Node.js et MongoDB. Je maîtrise également PHP, que j'utilise avec le framework Symfony, ainsi que MySQL. Mon objectif est de tirer parti de mon expertise pour créer des solutions innovantes qui stimulent la croissance de l'entreprise avec qui je collaborerai dans le futur et offrant des expériences utilisateur exceptionnelles.`;

export const ABOUT_TEXT = `Mon dévouement et ma polyvalence font de moi un développeur full stack passionné par la création d'applications web efficaces et conviviales. J'ai acquis 2 ans d'expérience dont  1 an en formation, et 6 mois en tant que stagiaire professionnel, en travaillant sur diverses technologies telles que React, Next.js, Angular, Symfony, Node.js, MySQL et MongoDB. Mon parcours dans le développement web a commencé par une profonde curiosité et mon cursus scolaire et cela a évolué vers une profesionnalisation où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes pour fournir des solutions de haute qualité. En dehors du code,j'aime rester actif, explorer de nouvelles technologies et travailler sur de nouveaux projets. J'apprécie également les activités telles que voyager, découvrir de nouveaux horizons et pratiquer un sport.`;

export const EXPERIENCES = [
  {
    year: "2024 - Présent",
    role: "Alternant Concepteur Développeur d'Applications",
    company: "École 2I Academy | À la recherche d'une entreprise",
    description: `Développement d'applications web modernes, Intégration de bases de données, Collaboration en équipe.`,
    technologies: ["Java", "Spring", "PHP", "Javascript", "C#", "ASP .NET", "Angular", "Symfony"],
  },
  {
    year: "2023 - 2024",
    role: "Développeur Full Stack en Stage",
    company: "FeelingJack",
    description: `Participation au développement d’une plateforme pour les bénévoles du marathon du lac d'Annecy`,
    technologies: ["HTML", "SASS", "Javascript", "React", "Node.js", "Strapi"],
  },
  {
    year: "2023 - 2024",
    role: "Développeur Full Stack en Formation",
    company: "Human Booster",
    description: `Développer les fonctionnalités back d’un site ou d’une application web en implémentant des APIs RESTful, développer la partie front d’un site ou d’une application web.`,
    technologies: ["HTML", "CSS", "Javascript", "Typescript", "PHP", "React", "Angular", "Node.js", "MongoDB", "Symfony", "mySQL"],
  },
  {
    year: "2020 - 2022",
    role: "Étudiant",
    company: "École ORT",
    description: `BTS Systèmes Informatique et Numériques`,
    technologies: ["HTML", "CSS", "PHP", "C++", "Java"],
  },
  {
    year: "2017 - 2019",
    role: "Étudiant",
    company: "Université Claude Bernard Lyon 1",
    description: `Licence Sciences et Technologies`,
  },
];

export const PROJECTS = [
  {
    title: "Site E-Commerce | MEAN Stack ",
    image: project1,
    description:
      "Un site de commerce entièrement fonctionnel avec des fonctionnalités telles que la liste des produits, le panier d’achat, l’authentification/création d’utilisateur ainsi qu'une localisation en temps réel avec leaftlet.",
    technologies: ["Angular", "Typescript", "HTML", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Site de Films d'Horreur | Symfony | API TMDB",
    image: project2,
    description:
      "Site web de films d'horreur répertoriant les dernières sorties, avec recherche par genre et fiches détaillées (acteurs, réalisateurs). Comprend un système de création et connexion utilisateur pour personnaliser l'expérience.",
    technologies: ["Symfony", "PHP", "Twig", "Tailwind", "CSS"],
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      ".", 
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Plateforme de Blogue | En Cours",
    image: project4,
    description:
      "Une plateforme conçue pour la création et la publication d'articles de blog, offrant des fonctionnalités telles que l'édition de texte enrichie, les commentaires et les profils des utilisateurs.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "61 Rue Baraban, Lyon 69003",
  phoneNo: "+33 6 60 24 91 51",
  email: "emre.ogk@hotmail.fr",
};
