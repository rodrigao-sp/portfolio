import styled, { createGlobalStyle } from "styled-components";

export const Cores = {
  primaryBackground: "#1D2428",
  secondaryBackground: "#14181B",
  primaryText: "#FFFFFF",
  secondaryText: "#95A1AC",
  azul: "#007bff",
  whatsapp: "#249689",
  email: "#FF5963",
};

export const GlobalCSs = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
        list-style: none;
        text-decoration: none;

        @media (max-width: 768px) {
          display: none;
        }
    }

    body {
        background-color: ${Cores.primaryBackground};
        color: ${Cores.primaryText};
        overflow-x: hidden;
    }

    h2 {
        padding-top: 50px;
        text-align: center;
        margin-bottom: 24px;
        font-size: 2rem;
        color: ${Cores.primaryText};
    }

    p {
        color: ${Cores.secondaryText};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;

export const ButtonCss = styled.button`
  color: ${Cores.primaryText};
  background-color: ${Cores.secondaryBackground};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, filter 0.3s ease;
  padding: 8px 16px;

  i {
    font-size: 1.3rem;
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;
