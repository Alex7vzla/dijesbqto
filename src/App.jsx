import './App.scss';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {

  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
    </main>
  )
}

export default App
