import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstWallet from './Wallet'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstWallet>
      <App />
    </FirstWallet>
  </React.StrictMode>
);

reportWebVitals();
