import { IntroCss } from "./styles";
import PerfilImage from "../../assets/images/Perfil.webp";
import { ButtonCss } from "../../styles";

// URLs externas centralizadas em constantes
const GITHUB_URL = "https://github.com/rodrigao-sp";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/";
const CURRICULO_URL = "";

// Função utilitária para abrir links em uma nova aba
const openInNewTab = (url: string | URL | undefined) => {
  window.open(url, "_blank", "noopener noreferrer");
};

const Intro = () => (
  <IntroCss id="Início">
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
              onClick={() => openInNewTab(GITHUB_URL)}
              className="social-icon btn github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </ButtonCss>
            <ButtonCss
              onClick={() => openInNewTab(LINKEDIN_URL)}
              className="social-icon btn linkedin"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </ButtonCss>
            <ButtonCss
              onClick={() => openInNewTab(CURRICULO_URL)}
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
