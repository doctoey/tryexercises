import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot, render } from 'react-dom';
import App from './App';

const container = document.createElement('div');
document.body.appendChild(container);

createRoot(container).render(<App />);