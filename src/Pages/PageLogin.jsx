// src/pages/PageLogin.jsx
// Position: \src\Pages\PageLogin.jsx
import React from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '../Styles/PageLogin.css';

function PageLogin() {
  return (
    <div className="login-container">

      {/* 1. Logo au centre de la page */}
      <div className="logo-container">
        <img src="/LogoGoblo.png" alt="Logo" className="logo" />
      </div>

      {/* 2. Input "Votre login" */}
      <div className='input-box'>
        <div className="input-container">
          <label htmlFor="loginInput"></label>
          <div className="input-wrapper">
            <img src="/Users.png" alt="Users Icon" className="input-icon" />
            <input type="text" id="loginInput" className="input-field" placeholder='Votre Login' />
          </div>
        </div>
      </div>

      {/* 3. Input "Votre mot de passe" */}
      <div className='input-box'>
        <div className="input-container">
          <label htmlFor="passwordInput"></label>
          <div className="input-wrapper">
            <img src="/Cadenas.png" alt="Cadenas Icon" className="input-icon" />
            <input type="password" id="passwordInput" className="input-field" placeholder='Votre mot de passe' />
          </div>
        </div>
      </div>

      {/* 4. Input "Se rappeler de moi" */}
      <div className="remember-me-container">
        <input type="checkbox" id="rememberMeInput" className="remember-me-checkbox" />
        <label htmlFor="rememberMeInput" className="remember-me-label">Se rappeler de moi</label>
      </div>

      {/* 5. Bouton "Connection" */}
      <Link to="/acceuil">
        <Boutton texte="Connection" />
      </Link>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default PageLogin;
