import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlertsState from './context/alerts/AlertsState'
import ShowState from './context/shows/showsState'
ReactDOM.render(
  <ShowState>
    <AlertsState>
    <App />
    </AlertsState>
  </ShowState>,
  document.getElementById('root')
);