import { QualitiesCss } from "./styles";

const ICONS = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "HTML5",
    tooltip: "HTML5",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "CSS3",
    tooltip: "CSS3",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    alt: "Python",
    tooltip: "Python",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "React",
    tooltip: "React",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
    tooltip: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    tooltip: "TypeScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    alt: "Sass",
    tooltip: "Sass",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "Docker",
    tooltip: "Docker",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    alt: "Redux",
    tooltip: "Redux",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    alt: "Vue.js",
    tooltip: "Vue.js",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/django.svg",
    alt: "Django",
    tooltip: "Django",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg",
    alt: "Gulp",
    tooltip: "Gulp",
  },
];

const SPECIALIZATIONS = [
  "Html",
  "Css",
  "JavaScript",
  "React",
  "Python",
  "Bootstrap",
  "Docker",
  "Git",
];

const Qualities = () => (
  <QualitiesCss id="Qualidades">
    <div className="container">
      <h2>Qualidades</h2>
      <p>
        Desenvolvedor front-end apaixonado por criar experiências web impactantes. 
        Especialista em HTML, CSS e JavaScript, com domínio em React para interfaces 
        responsivas e intuitivas. Expandindo conhecimentos em Python e comprometido 
        com soluções eficientes para desafios complexos. Colaborativo, movido pela 
        troca de conhecimento e constante aprimoramento técnico.
      </p>
      <div className="icons">
        {ICONS.map((icon, index) => (
          <div className="icon-item" key={index}>
            <img src={icon.src} alt={icon.alt} />
            <div className="tooltip">{icon.tooltip}</div>
          </div>
        ))}
      </div>
      <h3>Especializações</h3>
    </div>

    <div className="wrapper">
      {SPECIALIZATIONS.map((specialization, index) => (
        <div className={`itemLeft item${index + 1}`} key={index}>
          {specialization}
        </div>
      ))}
    </div>
  </QualitiesCss>
);

export default Qualities;
