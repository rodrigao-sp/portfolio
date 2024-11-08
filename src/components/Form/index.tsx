import { ButtonCss } from "../../styles";
import { FormCss } from "./styles";

const Form = () => (
  <FormCss id="Contato">
    <div className="container">
      <h2>Precisa de um desenvolvedor?</h2>
      <form
        id="contactForm"
        action="mailto:rodrigodasilvapires@gmail.com"
        method="post"
        encType="text/plain"
        className="form-container"
      >
        <div className="input-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10,11}"
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <ButtonCss type="submit">Enviar</ButtonCss>
      </form>
    </div>

    <div id="formMessage" style={{ display: "none" }}>
      Mensagem enviada com sucesso! Responderei o mais breve possível.
    </div>
  </FormCss>
);

export default Form;
