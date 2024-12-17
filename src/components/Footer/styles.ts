import styled from "styled-components";
import { Cores, breakpoints } from "../../styles";
import { fadeIn, float } from "../../styles/animations";

export const FooterCss = styled.footer`
  background-color: ${Cores.primaryBackground};
  padding: 60px 0 30px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    animation: ${fadeIn} 0.8s ease-out;

    @media (max-width: ${breakpoints.mobile}) {
      text-align: center;
    }
  }

  h3 {
    color: ${Cores.primaryText};
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${Cores.azul};

      @media (max-width: ${breakpoints.mobile}) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    a {
      color: ${Cores.secondaryText};
      transition: color 0.2s ease;
      font-size: 0.9rem;

      &:hover {
        color: ${Cores.primaryText};
      }
    }
  }

  .social-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
      justify-content: center;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${Cores.primaryBackground};

      &:hover {
        transform: translateY(-3px);
      }
    }

    .social-btn {
      &:hover {
        animation: ${float} 1s ease-in-out infinite;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    p {
      font-size: 0.9rem;
      color: ${Cores.secondaryText};
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 16px;

    .tech-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${Cores.secondaryText};
      transition: color 0.2s ease;
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-out forwards;

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          animation-delay: #{$i * 0.1}s;
        }
      }

      &:hover {
        color: ${Cores.primaryText};
      }

      i {
        font-size: 1.5rem;
      }

      .tech-name {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0 20px;

    .container {
      padding: 0 20px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;

      .footer-nav,
      .footer-info,
      .tecnologias {
        align-items: center;
      }

      ul {
        align-items: center;
      }

      .social-buttons {
        justify-content: center;
      }

      .tech-grid {
        justify-content: center;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .footer-content {
      gap: 25px;

      h3 {
        font-size: 1.1rem;
      }

      ul li a,
      .tech-item {
        font-size: 0.9rem;
      }
    }
  }
`;
