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
            <li>
              <a href="#Inicio">Inicio</a>
            </li>
            <li>
              <a href="#Qualidades">Qualidades</a>
            </li>
            <li>
              <a href="#Projetos">Projetos</a>
            </li>
            <li>
              <a href="Contato">Contato</a>
            </li>
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
            {/* Botão para GitHub */}
            <ButtonCss
              className="github"
              aria-label="GitHub"
              onClick={() =>
                window.open("https://github.com/rodrigao-sp", "_blank")
              }
            >
              <i className="fa-brands fa-github"></i>
            </ButtonCss>

            {/* Botão para LinkedIn */}
            <ButtonCss
              className="linkedin"
              aria-label="LinkedIn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",
                  "_blank"
                )
              }
            >
              <i className="fa-brands fa-linkedin"></i>
            </ButtonCss>

            {/* Botão para WhatsApp */}
            <ButtonCss
              className="whatsapp"
              aria-label="WhatsApp"
              onClick={() =>
                window.open("https://wa.me/16992445497?text=Olá", "_blank")
              }
            >
              <i className="fa-brands fa-whatsapp"></i>
            </ButtonCss>

            {/* Botão para E-mail */}
            <ButtonCss
              className="email"
              aria-label="Email"
              onClick={() =>
                window.open("mailto:rodrigodasilvapires@gmail.com", "_blank")
              }
            >
              <i className="fa-solid fa-envelope"></i>
            </ButtonCss>
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
