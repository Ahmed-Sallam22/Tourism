import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/js/all.min.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "~bootstrap/scss/bootstrap";

/* The following line can be included in your src/index.js or App.js file */

import { StyledEngineProvider } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

