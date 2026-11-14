import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@fontsource-variable/plus-jakarta-sans';
import './styles/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/tools.css';
import './styles/footer.css';
import './styles/themes.css';
import './styles/pages.css';
import './styles/enhance.css';
import './styles/templates.css';
import './styles/cine.css';
import './styles/light.css';
import './styles/white.css';
import './styles/redesign.css';
import './styles/polish.css';
import App from './App.jsx';

const Router = import.meta.env.VITE_HASH ? MemoryRouter : BrowserRouter;
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
