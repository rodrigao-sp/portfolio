import { IntroCss } from "./styles";
import PerfilImage from "../../assets/images/Perfil.webp";
import { ButtonCss } from "../../styles";

const Intro = () => (
  <IntroCss id="Inicio">
    <div className="container">
      <div className="content">
        <div className="txt">
          <p>
            Olá,
            <br />
            Meu nome é Rodrigo, e sou um desenvolvedor
            <span> Front-end</span>.
          </p>
          <div className="btns">
            <ButtonCss
              onClick={() =>
                window.open(
                  "https://github.com/rodrigao-sp",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="social-icon btn github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </ButtonCss>
            <ButtonCss
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="social-icon btn linkedin"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </ButtonCss>
            <ButtonCss
              onClick={() =>
                window.open(
                  "Currículo de Rodrigo da Silva Pires.pdf",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="social-icon btn curriculo"
              aria-label="Currículo"
              id="curriculoBtn"
            >
              <i className="fa-regular fa-file"></i>
              <span>Currículo</span>
            </ButtonCss>
          </div>
        </div>
        <div className="image">
          <img
            src={PerfilImage}
            alt="Foto de perfil de Rodrigo da Silva Pires"
          />
        </div>
      </div>
    </div>
  </IntroCss>
);

export default Intro;
