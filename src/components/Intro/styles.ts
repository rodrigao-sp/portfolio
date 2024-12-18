import styled from "styled-components";
import { Cores, breakpoints } from "../../styles/styles";
import { fadeIn } from "../../styles/animations";

export const IntroCss = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0 0;
  background-color: ${Cores.secondaryBackground};
  position: relative;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    min-height: calc(100vh - 170px);

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
    }
  }

  .txt {
    flex: 1;
    animation: ${fadeIn} 0.8s ease-out;

    p {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      margin-bottom: 2rem;
      line-height: 1.4;

      .typing {
        color: ${Cores.azul};
        font-weight: 700;
      }

      .cursor {
        animation: blink 1s infinite;
        color: ${Cores.azul};
      }
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .btns {
    display: flex;
    gap: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      justify-content: center;
      flex-wrap: wrap;
    }

    .github {
      background-color: #333;
      &:hover {
        background-color: #444;
      }
    }

    .linkedin {
      background-color: #0073b1;
      &:hover {
        background-color: #0077b5;
      }
    }

    .curriculo {
      background-color: #2ecc71;
      &:hover {
        background-color: #27ae60;
      }
    }

    .btn {
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-out forwards;

      &:nth-child(1) {
        animation-delay: 0.4s;
      }
      &:nth-child(2) {
        animation-delay: 0.6s;
      }
      &:nth-child(3) {
        animation-delay: 0.8s;
      }
    }
  }

  .image {
    margin: 0;
    padding: 0;
    line-height: 0;
    align-self: flex-end;

    img {
      width: clamp(250px, 30vw, 345px);
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: -4px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    margin-top: 60px;

    .container {
      flex: 1;
      flex-direction: column;
      gap: 30px;
      padding: 20px;
      align-items: center;
      justify-content: center;
      min-height: 100%;
    }

    .image {
      order: -1;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      align-self: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
      }
    }

    .txt {
      text-align: center;
      align-items: center;
      order: 0;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        text-align: center;
      }
    }

    .btns {
      order: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      width: 100%;
      flex-wrap: nowrap;

      .btn {
        flex: 0 1 auto;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 0;

    .container {
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;

        .image {
          width: 200px !important;
          height: 200px !important;
          display: flex;
          justify-content: center;
          margin: 0 auto !important;

          img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        .btns {
          display: flex !important;
          justify-content: center !important;
          gap: 15px !important;
          width: 100% !important;
          padding: 0 20px;

          button {
            width: auto !important;
            padding: 12px !important;

            span {
              display: none !important;
            }

            i {
              margin: 0 !important;
              font-size: 1.5rem !important;
            }
          }
        }
      }
    }
  }
`;
