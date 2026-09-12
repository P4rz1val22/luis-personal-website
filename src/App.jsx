import './App.css';
import Navbar from './components/NavbarComp/Navbar';
import Hint from './components/Hint/Hint';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

// The main application. Contains a router and routes leading to each of the pages
// available. This is dictated by the Navbar componend.
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Hint />
      </div>
    </Router>
  );
}


export default App;
