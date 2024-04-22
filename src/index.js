import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure that App component returns valid JSX
// Ensure that ThemeProvider wraps the App component with correct theme
// Ensure that index.css is properly formatted and does not cause rendering issues
createRoot(document.getElementById('root')).render(
    <App />
);
