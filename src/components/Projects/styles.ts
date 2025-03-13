import styled from "styled-components";
import { Cores } from "../../styles/styles";
import { fadeIn } from "../../styles/animations";

export const ProjectsCss = styled.section`
  padding: 100px;
  background-color: ${Cores.secondaryBackground};
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .projetos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .projeto {
    background: ${Cores.primaryBackground};
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid transparent;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.1}s;
      }
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      border-color: ${Cores.azul};
      background: ${Cores.primaryBackground};

      .projeto-imagem img {
        transform: scale(1.1);
        filter: brightness(0.9);
      }

      .projeto-conteudo {
        h3 {
          color: ${Cores.azul};
        }
      }
    }

    .projeto-imagem {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
      }
    }

    .projeto-conteudo {
      padding: 20px;
      transition: all 0.3s ease;
      width: 100%;
      box-sizing: border-box;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: ${Cores.primaryText};
        transition: color 0.3s ease;
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 20px;
        color: ${Cores.secondaryText};
      }

      .tecnologias {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 20px;
        width: 100%;
        box-sizing: border-box;

        span {
          background: ${Cores.azul};
          color: ${Cores.primaryText};
          font-size: 0.8rem;
          padding: 5px 10px;
          border-radius: 20px;
          display: inline-block;
          white-space: nowrap;
        }
      }

      .projeto-links {
        display: flex;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;

        a {
          flex: 1;
          text-align: center;
          padding: 8px;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          white-space: nowrap;

          &.demo {
            background: ${Cores.azul};
            color: ${Cores.primaryText};

            &:hover {
              background: ${Cores.hover};
              transform: translateY(-3px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
          }

          &.codigo {
            background: transparent;
            border: 1px solid ${Cores.secondaryText};
            color: ${Cores.secondaryText};

            &:hover {
              border-color: ${Cores.primaryText};
              color: ${Cores.primaryText};
              transform: translateY(-3px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .container {
      padding: 0 20px;
    }

    .projetos-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .projeto {
      .projeto-info {
        padding: 15px;

        h3 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .tecnologias {
        padding: 10px 15px;
        gap: 8px;

        span {
          font-size: 0.8rem;
          padding: 4px 8px;
        }
      }

      .links {
        padding: 10px 15px;
        gap: 10px;

        a {
          font-size: 0.9rem;
          padding: 6px 12px;
        }
      }
    }
  }
`;
