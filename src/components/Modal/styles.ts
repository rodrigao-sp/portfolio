import styled, { keyframes } from "styled-components";
import { Cores, breakpoints } from "../../styles/styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const AnimatedIcon = styled.div`
  animation: ${float} 3s ease-in-out infinite;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.div`
  background-color: ${Cores.primaryBackground};
  padding: 32px;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.3s ease-out;

  .modal-header {
    text-align: center;
    margin-bottom: 32px;

    .header-icon {
      font-size: 2.5rem;
      color: ${Cores.azul};
      margin-bottom: 16px;
      display: inline-block;
    }

    h2 {
      color: ${Cores.primaryText};
      font-size: 1.5rem;
      margin-bottom: 4px;
      background: linear-gradient(to right, ${Cores.azul}, #00bcd4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: ${Cores.secondaryText};
      font-size: 1.1rem;
    }
  }

  .tab-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0 16px;

    button {
      flex: 1;
      padding: 12px;
      background: transparent;
      border: 2px solid ${Cores.secondaryBackground};
      border-radius: 12px;
      color: ${Cores.secondaryText};
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      i {
        font-size: 1.2rem;
      }

      &.active {
        background: ${Cores.azul};
        border-color: ${Cores.azul};
        color: ${Cores.primaryText};
      }

      &:hover:not(.active) {
        border-color: ${Cores.azul};
        color: ${Cores.primaryText};
      }
    }
  }

  .section-container {
    min-height: 300px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;

    &.contacts,
    &.form {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.mobile}) {
      grid-template-columns: 1fr;
    }
  }

  .contact-card {
    padding: 24px;
    border-radius: 16px;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    background: ${Cores.secondaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    i {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    h4 {
      color: ${Cores.primaryText};
      font-size: 1.2rem;
      margin: 0;
    }

    p {
      color: ${Cores.secondaryText};
      font-size: 0.9rem;
      margin: 0;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &.whatsapp {
      i {
        color: #25d366;
      }
      &:hover {
        background: #25d366;
        i,
        h4,
        p {
          color: white;
        }
      }
    }

    &.email {
      i {
        color: #ea4335;
      }
      &:hover {
        background: #ea4335;
        i,
        h4,
        p {
          color: white;
        }
      }
    }

    &.linkedin {
      i {
        color: #0077b5;
      }
      &:hover {
        background: #0077b5;
        i,
        h4,
        p {
          color: white;
        }
      }
    }

    &.github {
      i {
        color: #333;
      }
      &:hover {
        background: #333;
        i,
        h4,
        p {
          color: white;
        }
      }
    }
  }

  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: ${Cores.secondaryText};
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${Cores.primaryText};
      background: ${Cores.secondaryBackground};
      transform: rotate(90deg);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
    width: 90%;
    margin: 0 10px;

    .modal-header {
      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    .tab-buttons {
      button {
        font-size: 0.9rem;
        padding: 8px;
      }
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .contact-card {
      padding: 12px;

      h4 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .form-group {
    position: relative;

    i {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: ${Cores.azul};
      font-size: 1rem;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 10px 10px 10px 35px;
      background-color: ${Cores.secondaryBackground};
      border: 1px solid transparent;
      border-radius: 8px;
      color: ${Cores.primaryText};
      font-size: 0.95rem;
      transition: all 0.3s ease;

      &:focus {
        border-color: ${Cores.azul};
        outline: none;
      }
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M8 11l-7-7h14l-7 7z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 16px center;
      cursor: pointer;
    }

    textarea {
      min-height: 70px;
      resize: vertical;
      padding-top: 10px;
      resize: none;

      & + i {
        top: 18px;
      }
    }
  }

  .submit-btn {
    padding: 10px;
    background-color: #25d366;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    font-weight: 600;

    i {
      font-size: 1.1rem;
    }

    &:hover {
      background-color: #128c7e;
      transform: translateY(-2px);
    }
  }
`;