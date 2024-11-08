import { ButtonCss } from "../../styles";
import { HeaderBar } from "./styles";
import { Link } from "react-scroll";

const handleWhatsAppClick = () => {
  window.open("https://wa.me/16992445497?text=Olá", "_blank");
};

const handleEmailClick = () => {
  window.location.href =
    "mailto:rodrigodasilvapires@gmail.com?subject=Assunto&body=Olá";
};

const Header = () => (
  <HeaderBar>
    <div className="container">
      <div className="logo">
        Rodrigo <span>S. Pires</span>
      </div>

      <nav className="menu" role="navigation" aria-label="Main menu">
        <ul>
          {["Início", "Qualidades", "Projetos", "Contato"].map(
            (section, index) => (
              <li key={index}>
                <Link to={section} smooth={true} duration={500}>
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="social-buttons">
        <ButtonCss
          className="whatsapp"
          aria-label="WhatsApp link"
          onClick={handleWhatsAppClick}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </ButtonCss>

        <ButtonCss
          className="email"
          aria-label="Email link"
          onClick={handleEmailClick}
        >
          <i className="fa-regular fa-envelope"></i>
        </ButtonCss>
      </div>
    </div>
  </HeaderBar>
);

export default Header;
