import { useState } from "react";
import { ModalOverlay, ModalContent, Form, AnimatedIcon } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    tipo: "projeto",
  });

  const [activeSection, setActiveSection] = useState<"form" | "contacts">(
    "contacts"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Me chamo ${formData.nome}.\n\nTipo de Contato: ${formData.tipo}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem: ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/16992445497?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-header">
          <AnimatedIcon className="header-icon">
            <i className="fas fa-handshake"></i>
          </AnimatedIcon>
          <h2>Vamos Trabalhar Juntos!</h2>
        </div>

        <div className="tab-buttons">
          <button
            className={activeSection === "contacts" ? "active" : ""}
            onClick={() => setActiveSection("contacts")}
          >
            <i className="fas fa-address-book"></i>
            Contatos Diretos
          </button>
          <button
            className={activeSection === "form" ? "active" : ""}
            onClick={() => setActiveSection("form")}
          >
            <i className="far fa-paper-plane"></i>
            Formulário
          </button>
        </div>

        <div className={`section-container ${activeSection}`}>
          {activeSection === "contacts" && (
            <div className="contact-grid">
              <a
                href="https://wa.me/16992445497"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
                <h4>WhatsApp</h4>
                <p>(16) 99244-5497</p>
              </a>

              <a
                href="mailto:rodrigodasilvapires@gmail.com"
                className="contact-card email"
              >
                <i className="far fa-envelope"></i>
                <h4>Email</h4>
                <p>rodrigodasilvapires@gmail.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/rodrigo-da-silva-pires-a5223b25b/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card linkedin"
              >
                <i className="fab fa-linkedin"></i>
                <h4>LinkedIn</h4>
                <p>Conecte-se comigo</p>
              </a>

              <a
                href="https://github.com/rodrigao-sp"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card github"
              >
                <i className="fab fa-github"></i>
                <h4>GitHub</h4>
                <p>Veja meus projetos</p>
              </a>
            </div>
          )}

          {activeSection === "form" && (
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <i className="far fa-user"></i>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-tag"></i>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                >
                  <option value="projeto">Projeto</option>
                  <option value="freelance">Freelance</option>
                  <option value="mentoria">Mentoria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <i className="far fa-comment-alt"></i>
                <textarea
                  name="mensagem"
                  placeholder="Sua mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                <i className="fab fa-send"></i>
                Enviar
              </button>
            </Form>
          )}
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
