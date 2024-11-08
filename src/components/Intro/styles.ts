import styled from "styled-components";
import { Cores } from "../../styles";

export const IntroCss = styled.div`
  padding-top: 100px;
  background-color: ${Cores.secondaryBackground};
  width: 100%;
  height: 100vh;

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

    span {
      color: ${Cores.azul};
      font-weight: bold;
      font-size: xx-large;
    }
  }

  .btns {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 16px;

    .github {
      background-color: #333;
    }

    .linkedin {
      background-color: #0073b1;
    }

    .curriculo {
      background-color: #4caf50;
    }

    .github,
    .linkedin,
    .curriculo {
      &:hover {
        filter: brightness(1.2);
      }
    }

    .btn i {
      font-size: 20px;
    }
  }

  .image {
    flex-shrink: 0;

    img {
      width: 345px;
      height: 645px;
      border-radius: 8px;
      opacity: 0.8;
    }
  }
`;
