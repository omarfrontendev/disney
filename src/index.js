import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './store/auth-context';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>    
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </AuthProvider>
  </React.StrictMode>
);
