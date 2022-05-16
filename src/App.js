import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission/";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Mission />
        <About />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}

export default App;
