import React, { useState } from "react";
import { ProjectsCss } from "./styles";
import EplayImage from "../../assets/images/Eplay.webp";
import TarefasImage from "../../assets/images/Tarefas.webp";
import CalculadoraImage from "../../assets/images/Calculadora-de-medias.webp";
import RestauranteImage from "../../assets/images/Restaurante.webp";
import CloneDisneyImage from "../../assets/images/Clone-disney.webp";
import AgendaImage from "../../assets/images/Agenda-contatos.webp";
import { ButtonCss } from "../../styles";

const Projects = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  const projetos = [
    {
      titulo: "Eplay - Loja de Jogos",
      categoria: "sites",
      descricao:
        "Uma loja virtual de jogos, desenvolvida com React e Styled Components, que se destaca pela sua integração com uma API para a listagem de produtos. A interface é responsiva e intuitiva, proporcionando uma experiência de usuário excepcional, onde cada jogador pode navegar e encontrar facilmente seus jogos favoritos.",
      imgSrc: EplayImage,
      linkSite: "https://eplay-ashen-one.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/eplay",
    },
    {
      titulo: "Restaurante",
      categoria: "sites",
      descricao:
        "Modelo de site para restaurante, criado com HTML, CSS e Bootstrap. Com um design moderno e responsivo, o site garante uma navegação fluida e uma apresentação atraente do menu, ideal para cativar clientes e promover suas delícias culinárias.",
      imgSrc: RestauranteImage,
      linkSite: "https://restaurante-weld.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/restaurante",
    },
    {
      titulo: "Clone Disney+",
      categoria: "sites",
      descricao:
        "Clone da plataforma Disney+, recriado com HTML, CSS, Gulp e SCSS, focando na otimização de desempenho e estilização modular. Este projeto responsivo espelha a estrutura visual e funcional do original, oferecendo aos usuários uma experiência de streaming familiar.",
      imgSrc: CloneDisneyImage,
      linkSite: "https://clone-disneyplus-omega-gules.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/clone_disneyplus",
    },
    {
      titulo: "Aplicação de Tarefas",
      categoria: "aplicacoes",
      descricao:
        "Uma aplicação para gerenciamento de tarefas, desenvolvida em React com Styled Components. Permite aos usuários criar, editar e excluir tarefas de maneira prática, combinando um design moderno e responsivo que facilita o acompanhamento de atividades diárias.",
      imgSrc: TarefasImage,
      linkSite: "https://minhas-tarefas-taupe-five.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/minhas-tarefas",
    },
    {
      titulo: "Agenda de Contatos",
      categoria: "aplicacoes",
      descricao:
        "Uma aplicação intuitiva para gerenciamento de contatos, permitindo aos usuários adicionar, editar e excluir informações de forma rápida e eficiente. O design responsivo e amigável garante uma experiência fluida em qualquer dispositivo.",
      imgSrc: AgendaImage,
      linkSite: "https://agenda-de-contatos-lovat-eight.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/agenda_de_contatos",
    },
    {
      titulo: "Calculadora de Médias",
      categoria: "aplicacoes",
      descricao:
        "Uma aplicação web para cálculo de médias de notas, desenvolvida com HTML, CSS e JavaScript. A interface intuitiva e os cálculos dinâmicos em tempo real proporcionam uma experiência interativa e útil para estudantes e educadores.",
      imgSrc: CalculadoraImage,
      linkSite: "https://projeto-calculadora-medias-inky-seven.vercel.app/",
      linkGithub: "https://github.com/rodrigao-sp/projeto_calculadora_medias",
    },
  ];

  const filtrarProjetos = (categoria: React.SetStateAction<string>) =>
    setCategoriaAtiva(categoria);

  const handleButtonClick = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };

  const categorias = [
    { nome: "todos", label: "Todos" },
    { nome: "sites", label: "Sites" },
    { nome: "aplicacoes", label: "Aplicações Web" },
  ];

  return (
    <ProjectsCss id="Projetos">
      <div className="container">
        <h2>Projetos</h2>
        <div className="filtros">
          {categorias.map(({ nome, label }) => (
            <button
              key={nome}
              className={`filtro ${categoriaAtiva === nome ? "ativo" : ""}`}
              onClick={() => filtrarProjetos(nome)}
            >
              {label}
            </button>
          ))}
        </div>

        {projetos
          .filter(
            (projeto) =>
              categoriaAtiva === "todos" || projeto.categoria === categoriaAtiva
          )
          .map((projeto, index) => (
            <div key={index} className="projeto para-aparecer">
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
