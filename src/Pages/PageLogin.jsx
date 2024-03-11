// src/pages/PageLogin.jsx
// Position: \src\Pages\PageLogin.jsx
import React, { useState } from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import { useNavigate, Link } from  "react-router-dom";

import { auth } from  '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import '../Styles/PageLogin.css';

function PageLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log(userCredential)
        alert('Connection réussi')
        navigate("/acceuil");
    })
    .catch((error) => {
        console.error('Erreur de connexion: ', error.message);
        alert( 'erreur :'+ error.message );
    });
  }

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
            placeholder="Votre Login"
            className="form-control bg-custom-color"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Votre mot de passe"
            className="form-control bg-custom-color"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <Boutton texte="Connexion" onClick={handleLogin}/>
      </Link>

      {/* Lien pour la réinitialisation du mot de passe */}
      <p className="text-center"> <Link to="/reset-password"> Mot de passe oublié ? </Link></p>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default PageLogin;
