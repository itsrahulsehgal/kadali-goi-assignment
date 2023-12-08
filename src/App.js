import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Joinus from './pages/Joinus';
import Resources from './pages/Resources';
import Explore from './pages/Explore';
import Companies from './pages/Companies';
function App() {
  return (
    <div className="App">      
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
