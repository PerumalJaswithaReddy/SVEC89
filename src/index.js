import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './components/Functional';
import Union from './components/Union';
import Corporation from './components/Corporation';
import Andhra from './components/Andhra';
import States from './States';
import Statefun from './Statefun';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Functional/> */}

    {/* <Union/> */}
    {/* <States/> */}
    {/* <Statefun/> */}
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
