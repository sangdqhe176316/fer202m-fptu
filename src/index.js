import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './slot2/Mapping-Collections-to-elements/App'
import MyComponent from './slot2/create-jsx-elements/MyComponent';
import MySection from './slot2/create-jsx-elements/MySection';
import MyButton from './slot2/create-jsx-elements/MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
