import { ButtonCss } from "../../styles";
import { FooterCss } from "./styles";

const Footer = () => (
  <FooterCss>
    <div className="container">
      <div className="footer-content">
        {/* Links de navegação */}
        <div className="links">
          <h3>Navegação</h3>
          <ul>
            {["Início", "Qualidades", "Projetos", "Contato"].map((item) => (
              <li key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Seção de contato */}
        <div className="contact">
          <h3>Contato</h3>
          <p>Email: rodrigodasilvapires@gmail.com</p>
          <p>Telefone: (16) 99244-5497</p>
          <p>Residente em: Franca, SP</p>
        </div>

        {/* Seção de redes sociais */}
        <div className="social">
          <h3>Social</h3>
          <div className="social-buttons">
            {[
              {
                label: "GitHub",
                url: "https://github.com/rodrigao-sp",
                icon: "github",
              },
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",
                icon: "linkedin",
              },
              {
                label: "WhatsApp",
                url: "https://wa.me/16992445497?text=Olá",
                icon: "whatsapp",
              },
              {
                label: "Email",
                url: "mailto:rodrigodasilvapires@gmail.com",
                icon: "envelope",
              },
            ].map(({ label, url, icon }) => (
              <ButtonCss
                key={label}
                aria-label={label}
                onClick={() => window.open(url, "_blank")}
              >
                <i className={`fa-brands fa-${icon}`} />
              </ButtonCss>
            ))}
          </div>
        </div>
      </div>

      {/* Mensagem de direitos autorais */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Rodrigo da Silva Pires. Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  </FooterCss>
);

export default Footer;
