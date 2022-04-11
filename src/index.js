import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/app.scss';

ReactDOM.render(
  <div className="overlay">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);
