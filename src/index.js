import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './Lb1'
import Group from './Lb2';
import Dish from './Lb3';
import Hello from './Dz1';
import About from './Dz2';
import City from './Dz3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book></Book><hr></hr>
    <Group></Group><hr></hr>
    <Dish></Dish><hr></hr>
    <About></About><hr></hr>
    <City></City>
  </React.StrictMode>
);
// root.render(React.createElement(Hello, null));

reportWebVitals();
