import { ProjectsCss } from "./styles";
import CosmoImage from "../../assets/images/cosmoexplorer.webp";
import EplayImage from "../../assets/images/Eplay.webp";
import TarefasImage from "../../assets/images/Tarefas.webp";
import RestauranteImage from "../../assets/images/Restaurante.webp";
import CloneDisneyImage from "../../assets/images/Clone-disney.webp";
import Massas from "../../assets/images/massas.webp"

interface Project {
  titulo: string;
  categoria: string;
  descricao: string;
  imgSrc: string;
  linkSite: string;
  linkGithub: string;
  tecnologias: string[];
}

const Projects = () => {
  const projetos: Project[] = [
    {
      titulo: "Cosmoexplorer",
      categoria: "sites",
      descricao:
        "Projeto sobre astronomia com temas de foguetes e viagens espaciais. Desenvolvido com Vite, React e TypeScript.",
      imgSrc: CosmoImage,
      linkSite: "https://www.cosmoexplorer.com.br/",
      linkGithub: "https://github.com/rodrigao-sp/cosmoexplorer",
      tecnologias: ["React", "TypeScript", "Vite", "Styled Components"],
    },
    {
      titulo: "Eplay - Loja de Jogos",
      categoria: "sites",
      descricao:
        "Loja virtual de jogos com integração API e interface responsiva. Feito com React, Styled Components e Redux.",
      imgSrc: EplayImage,
      linkSite: "https://eplay-ashen-one.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/eplay",
      tecnologias: ["React", "Styled Components", "API Integration", "Redux"],
    },
    {
      titulo: "Restaurante",
      categoria: "sites",
      descricao:
        "Site responsivo para restaurante, com design moderno e navegação fluida. Desenvolvido com HTML, CSS e Bootstrap.",
      imgSrc: RestauranteImage,
      linkSite: "https://restaurante-weld.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/restaurante",
      tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      titulo: "Clone Disney+",
      categoria: "sites",
      descricao:
        "Clone da Disney+ com foco em desempenho e design modular, usando HTML, CSS, Gulp e SCSS.",
      imgSrc: CloneDisneyImage,
      linkSite: "https://clone-disneyplus-omega-gules.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/clone_disneyplus",
      tecnologias: ["HTML", "SCSS", "Gulp", "JavaScript"],
    },
    {
      titulo: "Delivery",
      categoria: "sites",
      descricao:
        " Site de delivery, utilizando React Router DOM, Tailwind CSS, Framer Motion",
      imgSrc: Massas,
      linkSite: "https://massas-grazi.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/Massas-Grazi",
      tecnologias: ["React", "TypeScript", "Styled Components", "Redux"],
    },
    {
      titulo: "Aplicação de Tarefas",
      categoria: "aplicacoes",
      descricao:
        "Aplicação de gerenciamento de tarefas com React, TypeScript e Styled Components, permitindo adicionar e editar tarefas.",
      imgSrc: TarefasImage,
      linkSite: "https://minhas-tarefas-taupe-five.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/minhas-tarefas",
      tecnologias: ["React", "TypeScript", "Styled Components", "Redux"],
    },
  ];

  return (
    <ProjectsCss id="Projetos">
      <div className="container">
        <h2>Projetos</h2>

        <div className="projetos-grid">
          {projetos.map((projeto, index) => (
            <div className="projeto" key={index}>
              <div className="projeto-imagem">
                <img src={projeto.imgSrc} alt={projeto.titulo} />
                <div className="projeto-overlay">
                  <div className="tecnologias">
                    {projeto.tecnologias.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projeto-conteudo">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>

                <div className="projeto-links">
                  <a
                    href={projeto.linkSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                  {projeto.linkGithub && (
                    <a
                      href={projeto.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="codigo"
                    >
                      <i className="fab fa-github"></i> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectsCss>
  );
};

export default Projects;
