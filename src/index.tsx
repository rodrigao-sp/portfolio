import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalCSs } from "./styles/styles";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Qualities from "./components/Qualities";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalCSs />
    <Header />
    <Intro />
    <Qualities />
    <Projects />
    <Footer />
  </StrictMode>
);
