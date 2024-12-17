import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Qualities from "./components/Qualities";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Intro />
        <Projects />
        <Qualities />
      </main>
      <Footer />
    </>
  );
}

export default App;
