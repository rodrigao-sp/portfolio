import styled from "styled-components";
import { Cores } from "../../styles";

export const FooterCss = styled.footer`
  padding: 100px;
  background-color: ${Cores.secondaryBackground};
  color: #fff;
  height: auto;

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 1.2rem;
  }

  ul li {
    margin: 8px 0;
  }

  ul li a {
    color: ${Cores.secondaryText};
    transition: color 0.3s ease;
  }

  ul li a:hover {
    color: #fff;
  }

  button {
    background-color: transparent;
    color: ${Cores.secondaryText};

    &:hover {
      color: ${Cores.primaryText};
    }
  }

  .links,
  .contact,
  .social-buttons {
    flex: 1;
    text-align: start;
  }

  .social-buttons {
    display: flex;
  }

  .footer-bottom {
    margin-top: 60px;
    font-size: 0.8em;
  }
`;
