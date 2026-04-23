import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
