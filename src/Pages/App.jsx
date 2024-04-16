// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLogin from './collecte/PageLogin';
import ResetPassword from './collecte/ResetPassword';
import PageAcceuil from './collecte/PageAcceuil';
import PageEnrolement from './collecte/PageEnrolement';
import PageEncaissement from './collecte/PageEncaissement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/acceuil" element={<PageAcceuil />} />
        <Route path="/enrolement" element={<PageEnrolement />} />
        <Route path="/encaissement" element={<PageEncaissement />} />
      </Routes>
    </Router>
  );
}

export default App;
