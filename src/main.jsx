import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './Home.jsx'
import Registra from './Registra.jsx';
import AuthMiddleware from './Middleware.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AuthMiddleware />}>
        <Route element={<Home />} path='/'/>
      </Route>
      <Route element={<App />} path='/login' />
      <Route element={<Registra />} path='/register'/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
