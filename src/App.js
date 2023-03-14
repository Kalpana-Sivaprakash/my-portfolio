
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
      <Header/>
      
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Work" element={<Project/>} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;


