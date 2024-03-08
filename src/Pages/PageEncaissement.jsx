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

      {/* 1. Bouton Retour*/}
      <button
        type="button"
        className="rounded-circle position-absolute top-0 start-0 m-3 back-button"
        onClick={handleBack}>
        {/* <img src="/Boutton.png" alt="Boutton Retour" /> */}
        {'<'}
      </button>
      
      {/* 2. Titre "Encaisser" */}
      <Titre titrePage="Encaisser"/>

      {/* 3. Input "Matricule *" */}
      <div className="d-flex justify-content-center mt-5">
        <div className="input-container">
          <label htmlFor="matriculeInput"></label>
          <input
            type="text"
            id="matriculeInput"
            className="form-control custom-form-control border-0 border-bottom border-black"
            placeholder="Matricule *"
          />
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
