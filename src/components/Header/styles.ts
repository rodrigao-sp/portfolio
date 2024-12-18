import styled from "styled-components";
import { Cores, breakpoints } from "../../styles/styles";
import { slideInLeft, slideInRight } from "../../styles/animations";

export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${Cores.primaryBackground};
  height: 70px;
  display: flex;
  align-items: center;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .logo {
    animation: ${slideInLeft} 0.6s ease-out;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${Cores.primaryText};

    span {
      color: ${Cores.azul};
    }
  }

  .menu {
    ul {
      display: flex;
      gap: 32px;
      list-style: none;

      li {
        opacity: 0;
        animation: ${slideInRight} 0.6s ease-out forwards;

        a {
          color: ${Cores.secondaryText};
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            color: ${Cores.primaryText};
          }
        }
      }
    }
  }

  .menu-toggle {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 60px;

    .menu-toggle {
      display: block;
      background: none;
      border: none;
      color: ${Cores.primaryText};
      font-size: 1.5rem;
      cursor: pointer;
      padding: 5px;
    }

    .menu {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: ${Cores.primaryBackground};
      padding: 20px;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      &.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      ul {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin: 0;
        padding: 0;
      }
    }

    .social-buttons {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .container {
      padding: 0 15px;
    }

    .logo {
      font-size: 1.1rem;
    }

    .menu-toggle {
      font-size: 1.2rem;
    }
  }
`;
