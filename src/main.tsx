import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTask } from "./createTask";

console.log(createTask({ props: new Date().toLocaleString() }));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)