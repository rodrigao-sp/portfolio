import styled from "styled-components";
import { Cores } from "../../styles/styles";
import { fadeIn } from "../../styles/animations";

export const IntroCss = styled.section`
  display: flex;
  align-items: center;
  padding: 100px 0 0;
  min-height: 100vh;
  background: linear-gradient(145deg, ${Cores.primaryBackground} 0%, ${Cores.secondaryBackground} 100%);
  position: relative;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(53, 125, 255, 0.1) 0%, transparent 30%),
      radial-gradient(circle at 80% 70%, rgba(50, 50, 100, 0.08) 0%, transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
    z-index: 0;
    opacity: 0.6;
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    min-height: calc(100vh - 100px);
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      min-height: calc(100vh - 60px);
    }
  }

  .txt {
    flex: 1;
    animation: ${fadeIn} 0.8s ease-out;
    padding-bottom: 2rem;

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
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .btns {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      justify-content: center;
      flex-wrap: wrap;
    }

    .github {
      background-color: #333;
      &:hover { background-color: #444; }
    }

    .linkedin {
      background-color: #0073b1;
      &:hover { background-color: #0077b5; }
    }

    .curriculo {
      background-color: #2ecc71;
      &:hover { background-color: #27ae60; }
    }

    .btn {
      opacity: 0;
      animation: ${fadeIn} 0.5s ease-out forwards;

      &:nth-child(1) { animation-delay: 0.4s; }
      &:nth-child(2) { animation-delay: 0.6s; }
      &:nth-child(3) { animation-delay: 0.8s; }
    }
  }

  .image {
    margin: 0;
    padding: 0;
    line-height: 0;
    align-self: flex-end;
    position: relative;
    z-index: 2;
    max-width: 345px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: -4px;
      vertical-align: bottom;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column-reverse;
      padding: 20px;
      gap: 30px;
      min-height: auto;
      text-align: center;

      .text {
        max-width: 100%;
        align-items: center;
      }

      .image {
        width: 280px;
        height: 280px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 0px;
        }
      }

      .buttons {
        justify-content: center;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 0;
    margin-top: 60px;

    .container {
      padding: 20px 20px 0;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        min-height: calc(100vh - 60px);

        .image {
          width: 100% !important;
          height: auto !important;
          display: flex;
          justify-content: center;
          margin: auto 0 -4px !important;
          border-radius: 0;
          order: 2;
          max-width: 70%;

          img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain;
            border-radius: 0;
            margin-bottom: -4px;
          }
        }

        .btns {
          display: flex !important;
          justify-content: center !important;
          gap: 15px !important;
          width: 100% !important;
          padding: 0 20px;
          order: 1;
          margin-bottom: 2rem;

          button {
            width: auto !important;
            padding: 12px !important;

            span { display: none !important; }
            i { margin: 0 !important; font-size: 1.5rem !important; }
          }
        }
      }
    }
  }
`;
