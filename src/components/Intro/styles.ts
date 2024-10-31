import styled from "styled-components";
import { Cores } from "../../styles";

export const IntroCss = styled.div`
  padding-top: 100px;
  background-color: ${Cores.secondaryBackground};
  width: 100%;
  height: 768px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }

  p span {
    color: ${Cores.azul};
    font-weight: bold;
    font-size: xx-large;
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 16px;
  }

  .github {
    background-color: #333;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .linkedin {
    background-color: #0073b1;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .curriculo {
    background-color: #4caf50;

    &:hover {
      filter: brightness(1.2);
    }
  }

  .btn i {
    font-size: 20px;
  }

  .image {
    flex-shrink: 0;
  }

  .image img {
    margin-top: 30px;
    width: 345px;
    height: 645px;
    border-radius: 8px;
    opacity: 0.8;
  }
`;
