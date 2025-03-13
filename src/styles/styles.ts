import styled, { createGlobalStyle } from "styled-components";

export const Cores = {
  primaryBackground: "#0A0C10",
  secondaryBackground: "#161B22",
  primaryText: "#F0F6FC",
  secondaryText: "#8B949E",
  azul: "#58A6FF",
  accent: "#238636",
  hover: "#58A6FF",
};

export const GlobalCSs = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    html, body {
        overflow-x: hidden;
        width: 100%;
        position: relative;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }

    body {
        background-color: ${Cores.primaryBackground};
        color: ${Cores.primaryText};
        line-height: 1.6;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        overflow-x: hidden;
        position: relative;
        box-sizing: border-box;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        color: ${Cores.primaryText};
        position: relative;
        width: 100%;
        box-sizing: border-box;
        
        &:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: ${Cores.azul};
            border-radius: 2px;
        }
    }

    p {
        color: ${Cores.secondaryText};
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
    }

    @media (max-width: 320px) {
        .container {
            padding: 0 15px;
        }
    }
`;

export const ButtonCss = styled.button`
  color: ${Cores.primaryText};
  background-color: ${Cores.azul};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  font-size: clamp(0.9rem, 2vw, 1rem);
  padding: 0 16px;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  white-space: nowrap;
  box-sizing: border-box;

  i {
    font-size: 1.2rem;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${Cores.hover};
    transform: translateY(-2px);
  }

  @media (max-width: 320px) {
    padding: 0 12px;
    height: 36px;

    span {
      display: none;
    }

    i {
      margin-right: 0;
    }
  }
`;
