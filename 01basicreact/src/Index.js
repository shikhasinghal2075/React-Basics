import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Chai from './chai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <>
    <Chai />
    <h1>Chai aur React</h1>
    <p>Test body</p>
  </>
);

