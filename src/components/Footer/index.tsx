import { ButtonCss } from "../../styles/styles";
import { FooterCss } from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rodrigao-sp",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",
      icon: "linkedin",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/16992445497?text=Olá",
      icon: "whatsapp",
    },
  ];

  const techIcons = [
    {
      name: "React",
      icon: "fab fa-react",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
    },
    {
      name: "SASS",
      icon: "fab fa-sass",
    },
  ];

  const navLinks = ["Início", "Qualidades", "Projetos"];

  return (
    <FooterCss>
      <div className="container">
        <div className="footer-content">
          <div className="links">
            <h3>Navegação</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>
                    <i className="fas fa-chevron-right"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-info">
            <h3>Contato</h3>
            <p className="bio">
              Desenvolvedor front-end apaixonado pela criação de interfaces interativas e responsivas.
            </p>
            <div className="social-buttons">
              {socialLinks.map((link) => (
                <ButtonCss
                  key={link.name}
                  onClick={() => window.open(link.url, "_blank")}
                  aria-label={link.name}
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </ButtonCss>
              ))}
            </div>
          </div>

          <div className="tecnologias">
            <h3>Tecnologias</h3>
            <div className="tech-grid">
              {techIcons.map((tech) => (
                <div key={tech.name} className="tech-item">
                  <i className={tech.icon}></i>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Rodrigo da Silva Pires. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </FooterCss>
  );
};

export default Footer;
