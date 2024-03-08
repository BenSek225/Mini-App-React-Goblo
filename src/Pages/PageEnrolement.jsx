// src/pages/PageEnrolement.jsx
// Position: \src\Pages\PageEnrolement.jsx

import React, { useState }  from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import Titre from '../Components/Titre';
import { useNavigate } from 'react-router-dom';
import PopupEnroler from './PopupEnroler';
import '../Styles/PageEnrolement.css';

function PageEnrolement() {


  const [Nomprenom, setNomprenom] = useState('');
  const handleNomprenomChange = (event) => {
    setNomprenom(event.target.value);
  };

  const navigate = useNavigate();
  const handleBack = () => {
    // Naviguez vers la page précédente
    navigate(-1);
  };

  const [showPopupEnroler, setShowPopupEnroler] = useState(false);

  const handleClosePopupEnroler = () => {
    setShowPopupEnroler(false);
  };
  const handleEnroler = () => {
    setShowPopupEnroler(true); 
  };

  return (
    <div className='enrolement-container'>

      {/* 1. Bouton Retour*/}
      <button
        type="button"
        className="rounded-circle position-absolute top-0 start-0 m-3 back-button"
        onClick={handleBack}>
        {/* <img src="/Boutton.png" alt="Boutton Retour" /> */}
        {'<'}
      </button>

      {/* 2. Titre "Enrôler" */}
      <Titre titrePage="Enrôler"/>

      {/* 3. Input "Nom et prénom *" */}
      <div className="d-flex justify-content-center">
        <div className="nompre-margin">
          <input
            type="text"
            id="NomPrenomInput"
            required 
            className="form-control custom-form-control border-0 border-bottom border-black"
            placeholder="Nom et prénom *"
            value={Nomprenom}
            onChange={handleNomprenomChange}
          />
        </div>
      </div>


      {/* 4. Input "Raison social" */}
      <div className="d-flex justify-content-center">
        <div className="boite-input">
          <input
            type="text"
            id="raisonSocialInput"
            className="form-control custom-form-control border-0 border-bottom border-black"
            placeholder="Raison social"
          />
        </div>
      </div>

      {/* 5. Deux inputs "Zone *" et "Secteur *" */}
      <div className="d-flex add-margin">
        <div className="flex-grow-1 me-4">
          <select className="form-select custom-form-select border-0 border-bottom border-black">
            <option>Zone *</option>
            <option>Zone 1</option>
            <option>Zone 2</option>
            <option>Zone 3</option>
          </select>
        </div>
        <div className="flex-grow-2">
          <select className="form-select custom-form-select border-0 border-bottom border-black">
            <option>Section *</option>
            <option>Section A</option>
            <option>Section B</option>
            <option>Section C</option>
          </select>
        </div>
      </div>

      {/* 6. Deux inputs "Telephone 1 *" et "Telephone 2" */}
      <div className="d-flex tel-margin">
        <div className="flex-grow-1 me-3">
          <div>
            <input
              type="text"
              id="Tel2Input"
              className="form-control custom-form-control border-0 border-bottom border-black"
              placeholder="Telephone 1 *"
            />
          </div>
        </div>
        <div className="flex-grow-1">
          <div>
            <input
              type="text"
              id="Tel2Input"
              className="form-control custom-form-control border-0 border-bottom border-black"
              placeholder="Telephone 2"
            />
          </div>
        </div>
      </div>

      {/* 7. Input "Montant *" */}
      <div className="d-flex justify-content-center">
        <div className="boite-input">
          <input
            type="text"
            id="montantInput"
            required 
            className="form-control custom-form-control border-0 border-bottom border-black"
            placeholder="Montant *"
          />
        </div>
      </div>

      {/* 8. Input "Categorie *" (liste déroulante) */}
      <div className="add-margin">
        <select className="form-select custom-form-select border-0 border-bottom border-black">
          <option>Categorie *</option>
          <option>Categorie 1</option>
          <option>Categorie 2</option>
          <option>Categorie </option>
        </select>
      </div>

      {/* 9. Bouton "Enregistrer" */}
      <Boutton texte="Enregistrer" onClick={handleEnroler}/>

      {/* Pop-up de succès */}
      {showPopupEnroler && <PopupEnroler Nomprenom={Nomprenom} onClose={handleClosePopupEnroler} />}

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default PageEnrolement;
