import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './pages/calculator';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import Quote from './pages/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <div className="header">
          <h1>Math Magicians</h1>
          <Navbar />
        </div>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
);
