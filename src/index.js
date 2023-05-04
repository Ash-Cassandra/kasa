import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Error404 from './components/Error404/Error404'
import Sheet from './components/Sheet/Sheet'
import LodgingProvider from './components/Lodging/Lodging';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
    <LodgingProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sheet/:id" element={<Sheet />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </LodgingProvider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
