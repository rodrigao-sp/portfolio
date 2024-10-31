import styled from "styled-components";
import { Cores } from "../../styles";

export const FormCss = styled.div`
  padding: 100px;
  background-color: ${Cores.primaryBackground};
  width: 100%;
  min-height: 768px;

  .container {
    display: flex;
    width: 600px;
    flex-direction: column;
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
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border-radius: 8px;
    font-size: 1rem;
  }

  textarea {
    padding: 24px;
  }

  button {
    background-color: ${Cores.azul};
  }

  #formMessage {
    margin-top: 24px;
    text-align: center;
  }
`;
