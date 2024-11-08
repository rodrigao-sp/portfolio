import styled from "styled-components";
import { Cores } from "../../styles";

export const ProjectsCss = styled.div`
  padding: 100px;
  background-color: ${Cores.secondaryBackground};
  width: 100%;
  min-height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .filtros {
    align-self: flex-start;
    margin-bottom: 2rem;
    display: flex;
    gap: 24px;
  }

  .filtro {
    background-color: transparent;
    border: none;
    color: ${Cores.secondaryText};
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.2s, filter 0.2s;

    &.ativo {
      color: ${Cores.primaryText};
      filter: brightness(1.2);
    }

    &:hover {
      color: white;
    }
  }

  .projeto {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: linear-gradient(
      to right,
      ${Cores.secondaryBackground},
      ${Cores.primaryBackground}
    );
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(1.2);
    }

    img {
      width: 50%;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 20px;
    }

    .projeto-conteudo {
      flex: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .btn-wrapper {
        display: flex;
        gap: 16px;
      }

      button {
        background-color: ${Cores.azul};
        transition: background-color 0.3s ease;
      }
    }
  }
`;
