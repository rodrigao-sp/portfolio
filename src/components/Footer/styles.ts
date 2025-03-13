import styled from "styled-components";
import { Cores } from "../../styles/styles";
import { fadeIn } from "../../styles/animations";

export const FooterCss = styled.footer`
  background-color: ${Cores.primaryBackground};
  padding: 60px 0 30px;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${Cores.azul};
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    animation: ${fadeIn} 0.8s ease-out;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 320px) {
      text-align: center;
    }
  }

  h3 {
    color: ${Cores.primaryText};
    font-size: 1.3rem;
    margin-bottom: 25px;
    position: relative;
    font-weight: 600;
    letter-spacing: 0.5px;
    width: 100%;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${Cores.azul};
      border-radius: 2px;

      @media (max-width: 320px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      box-sizing: border-box;
    }

    a {
      color: ${Cores.secondaryText};
      transition: all 0.3s ease;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 0;
      position: relative;
      width: fit-content;
      white-space: nowrap;

      i {
        font-size: 0.8rem;
        opacity: 0.7;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      &:hover {
        color: ${Cores.primaryText};
        transform: translateX(5px);

        i {
          opacity: 1;
          transform: translateX(3px);
          color: ${Cores.azul};
        }
      }
    }
  }

  .social-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      transition: transform 0.3s ease;

      i {
        font-size: 1.5rem;
        color: ${Cores.primaryText};
      }

      &:hover {
        transform: translateY(-3px);
        
        i {
          color: ${Cores.azul};
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    width: 100%;
    box-sizing: border-box;

    p {
      font-size: 0.9rem;
      color: ${Cores.secondaryText};
      letter-spacing: 0.5px;
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 18px;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;

    .tech-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${Cores.secondaryText};
      transition: all 0.3s ease;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-out forwards;
      padding: 8px 12px;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }

      &:hover {
        color: ${Cores.primaryText};
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.08);
        
        i {
          color: ${Cores.azul};
        }
      }

      i {
        font-size: 1.5rem;
        transition: all 0.3s ease;
        color: ${Cores.azul};
        flex-shrink: 0;
      }

      .tech-name {
        font-size: 0.9rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }
    }
  }
  
  .bio {
    color: ${Cores.secondaryText};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 15px;
    max-width: 300px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    padding: 60px 0 30px;

    .container {
      padding: 0 20px;
      gap: 40px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;

      .footer-nav,
      .footer-info,
      .tecnologias {
        align-items: center;
      }

      ul {
        align-items: center;
      }
      
      .links a {
        margin: 0 auto;
        justify-content: center;
      }

      h3::after {
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
      }

      .social-buttons {
        justify-content: center;
      }

      .tech-grid {
        justify-content: center;
      }
      
      .bio {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 50px 0 25px;
    
    .footer-content {
      gap: 35px;

      h3 {
        font-size: 1.2rem;
      }

      ul li a,
      .tech-item {
        font-size: 0.9rem;
      }
    }

    .footer-nav ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }

  @media screen and (max-width: 480px) {
    .social-buttons {
      gap: 20px;
    }

    .footer-nav ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
