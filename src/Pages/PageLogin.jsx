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
        <img src="/LogoGoblo.png" alt="Logo" className="img-fluid rounded-circle" />
      </div>


      {/* 2. Input "Votre login" */}
      <div className='input-box'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="userIcon">
            <i className="bi bi-person-fill fs-2"></i>
          </span>
          <input
            type="email"
            className="form-control bg-custom-color"
            placeholder="Votre Login"
          />
        </div>
      </div>

      {/* 3. Input "Votre mot de passe" */}
      <div className="input-box">
        <div className="input-group mb-3">
          <span className="input-group-text" id="lockIcon">
            <i className="bi bi-lock-fill fs-2"></i>
          </span>
          <input
            type="password"
            className="form-control bg-custom-color"
            placeholder="Votre mot de passe"
          />
        </div>
      </div>


      {/* 4. Input "Se rappeler de moi" */}
      <div className=" form-check">
        <input type="checkbox" id="rememberMeInput" className="form-check-input" />
        <label htmlFor="rememberMeInput" className="form-check-label">Se rappeler de moi</label>
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
