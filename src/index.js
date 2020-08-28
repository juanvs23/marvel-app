import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FunctionalsProvider from './context/Context';




ReactDOM.render(
  <FunctionalsProvider>

    <App />
  </FunctionalsProvider>  
  ,
  document.getElementById('root')
);


