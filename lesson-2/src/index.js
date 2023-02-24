import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={{ism:"Ahmadullo", yosh:"18"}} />
    <br/>
    <br/>
    <App data={{ism:"Roziya", yosh:"17"}} />
  </React.StrictMode>
);


