import { useState } from "react";
import { ButtonCss } from "../../styles";
import { HeaderBar } from "./styles";
import { Link } from "react-scroll";
import Modal from "../Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderBar>
        <div className="container">
          <div className="logo">
            Rodrigo <span>S. Pires</span>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={`fas fa-${isMenuOpen ? "times" : "bars"}`}></i>
          </div>

          <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              {["Início", "Qualidades", "Projetos"].map((section, index) => (
                <li key={index}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={closeMenu}
                  >
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
