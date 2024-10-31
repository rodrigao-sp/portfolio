import styled from "styled-components";
import { Cores } from "../../styles";

export const ProjectsCss = styled.div`
  padding: 100px;
  background-color: ${Cores.secondaryBackground};
  width: 100%;
  min-height: 768px;

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
  }

  .filtro {
    background-color: transparent;
    margin: 0 24px;
    border: none;
    color: ${Cores.secondaryText};
    font-size: 1rem;
    cursor: pointer;

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
    flex-direction: row;
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
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: nowrap;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .btn-wrapper {
        display: flex;
        align-items: flex-end;
        gap: 16px;
      }

      button {
        background-color: ${Cores.azul};
      }
    }
  }
`;
