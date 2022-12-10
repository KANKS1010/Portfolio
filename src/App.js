import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Login from './components/Login';

function App() {
  return (
 
    <div className="App">
      <Login />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div> 
    
  );
}

export default App;
