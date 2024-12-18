import styled from "styled-components";
import { Cores, breakpoints } from "../../styles/styles";
import { fadeIn } from "../../styles/animations";

export const ProjectsCss = styled.section`
  padding: 100px 0;
  background-color: ${Cores.secondaryBackground};

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .projetos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 20px 0;
  }

  .projeto {
    background: ${Cores.primaryBackground};
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;

    @for $i from 1 through 12 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i * 0.1}s;
      }
    }

    &:hover {
      transform: translateY(-10px);
    }

    .projeto-imagem {
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }

    .projeto-conteudo {
      padding: 20px;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: ${Cores.primaryText};
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 20px;
        color: ${Cores.secondaryText};
      }

      .projeto-links {
        display: flex;
        gap: 12px;

        a {
          flex: 1;
          text-align: center;
          padding: 8px;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;

          &.demo {
            background: ${Cores.azul};
            color: ${Cores.primaryText};

            &:hover {
              background: ${Cores.hover};
            }
          }

          &.codigo {
            background: transparent;
            border: 1px solid ${Cores.secondaryText};
            color: ${Cores.secondaryText};

            &:hover {
              border-color: ${Cores.primaryText};
              color: ${Cores.primaryText};
            }
          }
        }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
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
