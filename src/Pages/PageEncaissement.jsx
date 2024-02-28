// src/pages/PageEncaissement.jsx
// Position: \src\Pages\PageEncaissement.jsx

import React, { useState } from 'react';
import Titre from '../Components/Titre';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import PopupEncaisser from './PopupEncaisser';
import { useNavigate } from 'react-router-dom';
import '../Styles/PageEncaissement.css';

function PageEncaissement() {

  const [showPopupEncaisser, setShowPopupEncaisser] = useState(false);
  const handleClosePopupEncaisser = () => {
    setShowPopupEncaisser(false);
  };
  const handleEncaisser = () => {
    setShowPopupEncaisser(true); 
  };

  const navigate = useNavigate();
  const handleBack = () => {
    // Naviguez vers la page précédente
    navigate(-1);
  };

  return (
    <div className="encaissement-container">

      {/* 1. Bouton Retour avec icône */}
      <div className="encaissement-back-button">
        <button onClick={handleBack}>
          <img src="/Boutton.png" alt="Boutton Retour" />
        </button>
      </div>
      
      {/* 2. Titre "Encaisser" */}
      <Titre titrePage="Encaisser"/>

      {/* 3. Input "Matricule *" */}
      <div className="encaissement-input">
        <label htmlFor="matriculeInput"></label>
        <div  className= 'input-content'>
          <input type="text" 
                id="matriculeInput" 
                required 
                className="encaissement-text-input" 
                placeholder='Matricule *'/>
        </div>
      </div>

      {/* 4. Appeler le composant Boutton avec le texte "Encaisser" */}
      <Boutton texte="Encaisser" onClick={handleEncaisser}/>

      {/* Pop-up de succès */}
      {showPopupEncaisser && <PopupEncaisser onClose={handleClosePopupEncaisser} />}

      {/* 5. Appeler le Footer */}
      <Footer/>
    </div>
  );
}

export default PageEncaissement;
