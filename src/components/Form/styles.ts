import styled from "styled-components";
import { Cores } from "../../styles";

export const FormCss = styled.div`
  padding: 100px;
  background-color: ${Cores.primaryBackground};
  width: 100%;
  height: 100vh;

  .container {
    display: flex;
    width: 100%;
    max-width: 600px;
    flex-direction: column;
    margin: 0 auto;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 8px;
    font-size: 1rem;
    border: 1px solid ${Cores.secondaryText};
  }

  textarea {
    padding: 24px;
    resize: vertical;
  }

  button {
    background-color: ${Cores.azul};
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${Cores.primaryText};
    }
  }

  #formMessage {
    margin-top: 24px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
