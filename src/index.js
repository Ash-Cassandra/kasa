import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Error404 from './components/Error404/Error404'
import Lodging from './components/Lodging/Lodging';
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
        <Route path="/Lodging" element={<Lodging />}/>
        <Route path="/Sheet" element={<Sheet />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </LodgingProvider>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
