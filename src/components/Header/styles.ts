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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  overflow-x: hidden;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    overflow-x: hidden;
  }

  .logo {
    animation: ${slideInLeft} 0.6s ease-out;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${Cores.primaryText};
    z-index: 1001;

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
    cursor: pointer;
    z-index: 1001;
    font-size: 1.5rem;
    color: ${Cores.primaryText};
  }

  @media (max-width: ${breakpoints.tablet}) {
    .menu-toggle {
      display: block;
    }

    .menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: ${Cores.primaryBackground};
      padding: 80px 20px 20px;
      transition: 0.3s ease-in-out;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

      &.active {
        right: 0;
      }

      ul {
        flex-direction: column;
        align-items: center;
        gap: 20px;

        li {
          width: 100%;
          text-align: center;

          a {
            display: block;
            padding: 10px;
            font-size: 1.2rem;

            &:hover {
              background-color: ${Cores.secondaryBackground};
              border-radius: 4px;
            }
          }
        }
      }
    }

    .social-buttons {
      margin-left: 0;

      .contact-btn {
        padding: 8px 16px;

        span {
          display: none;
        }

        i {
          margin: 0;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.2rem;
      order: 1;
      text-align: center;
      flex: 1;
    }

    .menu {
      display: none;
    }

    .social-buttons {
      order: 2;
      display: flex;
      flex-direction: row;
      gap: 8px;
      margin: 0;

      .contact-btn {
        padding: 8px;

        i {
          margin: 0;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const ButtonCss = styled.button`
  background-color: ${Cores.accent};
  color: ${Cores.primaryText};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  i {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${Cores.hover};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 6px 12px;

    span {
      display: none;
    }

    i {
      margin: 0;
    }
  }
`;
