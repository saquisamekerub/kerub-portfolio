import './App.css';

import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Achievements from './Achievements/Achievements.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';

function App() {
  return (
    <div className="app">

      <Navbar />

      <Home />

      <Achievements />

      <Projects />

      <Contact />

      <footer className="app__footer">
        © 2026 Kerub M. Saquisame. All rights reserved.
      </footer>

    </div>
  );
}

export default App;