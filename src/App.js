import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Quote from './pages/Quote';
import Calculator from './pages/calculator';

function App() {
  return (
    <div>
      <div className="header">
        <h1>Math Magicians</h1>
        <Navbar />
      </div>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
