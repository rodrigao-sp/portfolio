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

export const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
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
    }

    body {
        background-color: ${Cores.primaryBackground};
        color: ${Cores.primaryText};
        line-height: 1.6;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }

    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        overflow-x: hidden;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        color: ${Cores.primaryText};
        position: relative;
        
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
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: ${breakpoints.mobile}) {
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

  i {
    font-size: 1.2rem;
    margin-right: 8px;
  }

  &:hover {
    background-color: ${Cores.hover};
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
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
