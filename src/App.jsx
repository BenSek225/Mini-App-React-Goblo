// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLogin from './Pages/PageLogin';
import ResetPassword from './Pages/ResetPassword';
import PageAcceuil from './Pages/PageAcceuil';
import PageEnrolement from './Pages/PageEnrolement';
import PageEncaissement from './Pages/PageEncaissement';

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
