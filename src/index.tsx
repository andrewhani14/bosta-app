import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./Store";
import Header from './components/Header';

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <App />
  </Provider>,
  document.getElementById('root')
);