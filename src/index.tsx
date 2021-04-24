import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import reportWebVitals from './reportWebVitals';

import "./assets/less/base.less"
import "./assets/less/common.less"

import { isDev } from "./config/app"

let render = isDev ? ReactDOM.render : ReactDOM.hydrate;

render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
