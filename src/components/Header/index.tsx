import { ButtonCss } from "../../styles";
import { HeaderBar } from "./styles";

const Header = () => (
  <HeaderBar>
    <div className="container">
      <div className="logo">
        Rodrigo <span>S. Pires</span>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <a href="#Inicio">Início</a>
          </li>
          <li>
            <a href="#Qualidades">Qualidades</a>
          </li>
          <li>
            <a href="#Projetos">Projetos</a>
          </li>
          <li>
            <a href="#Contato">Contato</a>
          </li>
        </ul>
      </nav>

      <div className="social-buttons">
        <ButtonCss
          className="whatsapp"
          aria-label="WhatsApp"
          onClick={() =>
            window.open("https://wa.me/16992445497?text=Olá", "_blank")
          }
        >
          <i className="fa-brands fa-whatsapp"></i>
        </ButtonCss>

        <ButtonCss
          className="email"
          aria-label="Email"
          onClick={() =>
            (window.location.href =
              "mailto:rodrigodasilvapires@gmail.com?subject=Assunto&body=Olá")
          }
        >
          <i className="fa-regular fa-envelope"></i>
        </ButtonCss>
      </div>
    </div>
  </HeaderBar>
);

export default Header;
