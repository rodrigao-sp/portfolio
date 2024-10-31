import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Qualities from "./components/Qualities";
import { GlobalCSs } from "./styles";

function App() {
  return (
    <>
      <GlobalCSs />
      <Header />
      <Intro />
      <Qualities />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default App;
