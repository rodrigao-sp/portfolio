import { useEffect, useState, useMemo } from "react";
import { IntroCss } from "./styles";
import PerfilImage from "../../assets/images/Perfil.webp";
import { ButtonCss } from "../../styles/styles";

const GITHUB_URL = "https://github.com/rodrigao-sp";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/";
const CURRICULO_URL = "/curriculo.pdf";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener noreferrer");
};

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = useMemo(() => ["Front-end", "React", "TypeScript"], []);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[textIndex];
    const shouldDelete = isDeleting && displayText.length > 0;
    const shouldWrite = !isDeleting && displayText.length < currentText.length;
    const shouldSwitchText = isDeleting && displayText.length === 0;

    if (shouldDelete) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
    } else if (shouldWrite) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else if (shouldSwitchText) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else if (displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <IntroCss id="Início">
      <div className="container">
        <div className="content">
          <div className="txt">
            <p>
              Olá,
              <br />
              Meu nome é Rodrigo, e sou um desenvolvedor
              <span className="typing"> {displayText}</span>
              <span className="cursor">|</span>
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
              >
                <i className="fas fa-file-alt"></i>
                <span>Currículo</span>
              </ButtonCss>
            </div>
          </div>
          <div className="image">
            <img
              src={PerfilImage}
              alt="Foto de perfil de Rodrigo da Silva Pires"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </IntroCss>
  );
};

export default Intro;
