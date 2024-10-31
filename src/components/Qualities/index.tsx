import { QualitiesCss } from "./styles";

const Qualities = () => (
  <QualitiesCss id="Qualidades">
    <div className="container">
      <h2>Qualidades</h2>
      <p>
        Sou um desenvolvedor front-end apaixonado por inovação e tecnologia, com
        uma sólida trajetória em criar experiências web robustas e escaláveis.
        Minha especialidade inclui um profundo domínio de HTML, CSS e
        JavaScript, além de frameworks modernos como React, que me permitem
        desenvolver interfaces intuitivas e responsivas, sempre com as melhores
        práticas de mercado. Atualmente, estou expandindo minha expertise em
        Python, pois acredito no valor de encontrar soluções eficientes para
        problemas complexos. Com facilidade para trabalhar em equipe, sou movido
        pela troca de conhecimento e pela busca constante de aprimoramento,
        sempre visando entregar resultados excepcionais.
      </p>
      <div className="icons">
        {[
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
        ].map((icon, index) => (
          <div className="icon-item" key={index}>
            <img src={icon.src} alt={icon.alt} />
            <div className="tooltip">{icon.tooltip}</div>
          </div>
        ))}
      </div>
      <h3>Especializações</h3>
    </div>

    <div className="wrapper">
      {[
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Python",
        "Bootstrap",
        "Docker",
        "Git",
      ].map((specialization, index) => (
        <div className={`itemLeft item${index + 1}`} key={index}>
          {specialization}
        </div>
      ))}
    </div>
  </QualitiesCss>
);

export default Qualities;
