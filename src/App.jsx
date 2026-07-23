import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <footer className="app__footer">© 2026 Kerub M. Saquisame. All rights reserved.</footer>
    </>
  );
}

export default App;