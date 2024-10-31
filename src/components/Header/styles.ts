import styled from "styled-components";
import { Cores } from "../../styles";

export const HeaderBar = styled.header`
  background-color: rgba(20, 24, 27, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  height: 100px;
  padding: 24px;
  position: fixed;
  z-index: 10;
  transition: background-color 0.3s ease;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.2s ease, filter 0.2s ease;

    &:hover {
      filter: brightness(1.2);
    }
  }

  span {
    color: ${Cores.azul};
  }

  .menu {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .menu ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  .menu a {
    font-size: 1rem;
    color: ${Cores.secondaryText};
    margin: 0 24px;
    transition: color 0.2s ease, filter 0.2s ease;

    &:hover {
      color: ${Cores.primaryText};
      filter: brightness(1.2);
    }
  }

  .social-buttons {
    gap: 16px;
    display: inline-flex;
  }

  button {
    width: 40px;
    height: 40px;
    transition: background-color 0.2s ease;

    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .whatsapp {
    background-color: ${Cores.whatsapp};
  }

  .email {
    background-color: ${Cores.email};
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    .menu ul {
      flex-direction: column;
      align-items: center;
    }

    .menu a {
      margin: 8px 0;
    }

    .container {
      flex-direction: column;
      align-items: center;
    }

    .social-buttons {
      margin-top: 16px;
    }
  }
`;
