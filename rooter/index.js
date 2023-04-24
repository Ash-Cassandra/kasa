import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from '../src/reportWebVitals';

import App from '../src/App';
import Header from '../src/components/Header/Header';
import About from '../src/pages/About/About';
import Error404 from '../src/components/Error404/Error404'
import Lodging from '../src/components/Lodging/Lodging';
import Sheet from '../src/components/Sheet/Sheet'
import LodgingProvider from '../src/components/Lodging/Lodging';


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
        <Route path="/Sheet/:id" element={<Sheet />}/>
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
