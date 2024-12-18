import { useState } from "react";
import { ButtonCss } from "../../styles/styles";
import { HeaderBar } from "./styles";
import { Link } from "react-scroll";
import Modal from "../Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeaderBar>
        <div className="container">
          <div className="logo">
            Rodrigo <span>S. Pires</span>
          </div>

          <nav className="menu">
            <ul>
              {["Início", "Qualidades", "Projetos"].map((section, index) => (
                <li key={index}>
                  <Link to={section} smooth={true} duration={500}>
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-buttons">
            <ButtonCss
              className="contact-btn"
              aria-label="Trabalhar Juntos"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="fa-solid fa-handshake"></i>
              <span>Trabalhar Juntos</span>
            </ButtonCss>
          </div>
        </div>
      </HeaderBar>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
