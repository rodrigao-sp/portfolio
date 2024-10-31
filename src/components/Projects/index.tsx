import React, { useState } from "react";
import { ProjectsCss } from "./styles";
import EplayImage from "../../assets/images/Agenda-contatos.webp";
import TarefasImage from "../../assets/images/Agenda-contatos.webp";
import CalculadoraImage from "../../assets/images/Calculadora-de-medias.webp";
import RestauranteImage from "../../assets/images/Restaurante.webp";
import CloneDisneyImage from "../../assets/images/Clone-disney.webp";
import { ButtonCss } from "../../styles";

const Projects = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const projetos = [
    {
      titulo: "Eplay - Loja de Jogos",
      categoria: "sites",
      descricao:
        "Loja virtual de jogos desenvolvida em React, utilizando Styled Components e integração com uma API para listagem de produtos. Interface responsiva e intuitiva, com foco na experiência do usuário.",
      imgSrc: EplayImage,
      linkSite: "https://eplay-loja-jogos.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/eplay_loja_jogos",
    },
    {
      titulo: "Restaurante",
      categoria: "sites",
      descricao:
        "Site modelo para restaurante, desenvolvido com HTML, CSS e Bootstrap. Possui design moderno e responsivo, focado em uma navegação fluida e apresentação atraente do menu.",
      imgSrc: RestauranteImage,
      linkSite: "https://restaurante-weld.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/restaurante",
    },
    {
      titulo: "Clone Disney+",
      categoria: "sites",
      descricao:
        "Clone do Disney+ recriado com HTML, CSS, Gulp e SCSS, focando em otimização de performance e estilização modular. O projeto é responsivo e espelha a estrutura visual e funcional do original.",
      imgSrc: CloneDisneyImage,
      linkSite: "https://clone-disneyplus-omega-gules.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/clone_disneyplus",
    },
    {
      titulo: "Aplicação de Tarefas",
      categoria: "aplicacoes",
      descricao:
        "Aplicação de gerenciamento de tarefas desenvolvida em React com Styled Components. Permite criar, editar e excluir tarefas de forma prática, com um design moderno e responsivo.",
      imgSrc: TarefasImage,
      linkSite: "https://aplicacao-tarefas.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/aplicacao_tarefas",
    },
    {
      titulo: "Calculadora de Médias",
      categoria: "aplicacoes",
      descricao:
        "Aplicação web para cálculo de médias de notas, desenvolvida com HTML, CSS e JavaScript. Oferece interface intuitiva e cálculos dinâmicos em tempo real.",
      imgSrc: CalculadoraImage,
      linkSite: "https://projeto-calculadora-medias-inky-seven.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/projeto_calculadora_medias",
    },
  ];

  const filtrarProjetos = (categoria: React.SetStateAction<string>) => {
    setCategoriaAtiva(categoria);
  };

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <ProjectsCss id="Projetos">
      <div className="container">
        <h2>Projetos</h2>
        <div className="filtros">
          <button
            className={`filtro ${categoriaAtiva === "todos" ? "ativo" : ""}`}
            onClick={() => filtrarProjetos("todos")}
          >
            Todos
          </button>
          <button
            className={`filtro ${categoriaAtiva === "sites" ? "ativo" : ""}`}
            onClick={() => filtrarProjetos("sites")}
          >
            Sites
          </button>
          <button
            className={`filtro ${
              categoriaAtiva === "aplicacoes" ? "ativo" : ""
            }`}
            onClick={() => filtrarProjetos("aplicacoes")}
          >
            Aplicações Web
          </button>
        </div>

        {projetos
          .filter(
            (projeto) =>
              categoriaAtiva === "todos" || projeto.categoria === categoriaAtiva
          )
          .map((projeto, index) => (
            <div
              key={index}
              className="projeto para-aparecer"
              style={{ display: "flex" }}
            >
              <img
                src={projeto.imgSrc}
                alt={`Visual do projeto ${projeto.titulo}`}
              />
              <div className="projeto-conteudo">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className="btn-wrapper">
                  <ButtonCss
                    onClick={() => handleButtonClick(projeto.linkSite)}
                  >
                    <i className="fa-solid fa-globe"></i>Visitar Site
                  </ButtonCss>
                  <ButtonCss
                    onClick={() => handleButtonClick(projeto.linkGithub)}
                  >
                    <i className="fab fa-github"></i>Código Fonte
                  </ButtonCss>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ProjectsCss>
  );
};

export default Projects;
