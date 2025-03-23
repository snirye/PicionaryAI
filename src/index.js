// src/index.js (or src/main.jsx for Vite)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <-- Imports the default export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);