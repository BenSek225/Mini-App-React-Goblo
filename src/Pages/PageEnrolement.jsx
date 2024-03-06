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

      {/* 1. Bouton Retour avec icône */}
      <div className="encaissement-back-button">
        <button onClick={handleBack}>
          <img src="/Boutton.png" alt="Boutton Retour" />
        </button>
      </div>

      {/* 2. Titre "Enrôler" */}
      <Titre titrePage="Enrôler" />

      {/* 3. Input "Nom et prénom *" */}
      <div className='container-nomprenom'>
        <label htmlFor="nomPrenomInput"></label>
        <div className='container-nomprenomInput'>
          <input type="text"
                id="nomPrenomInput"
                required 
                placeholder='Nom et prénom *'
                value={Nomprenom}
                onChange={handleNomprenomChange}/>
        </div>
      </div>

      {/* 4. Input "Raison social" */}
      <div className='container-raisonsocial'>
        <label htmlFor="raisonSocialInput"></label>
        <div className='container-raisonsocialInput'>
          <input type="text" 
                id="raisonSocialInput" 
                placeholder='Raison social'/>
        </div>
      </div>

      {/* 5. Deux inputs "Zone *" et "Secteur *" */}
      <div className='zone-section'>

        <div className='zone'>
          <label htmlFor="zoneInput"></label>
          <div className='container-zoneListe'>
            <select id="zoneInput" required>
              {/* Options de la liste déroulante */}
              <option value="option2" className='optionpass'>Zone *</option>
              <option value="option1" className='optionpass'>Zone 2</option>
              <option value="option2" className='optionpass'>Zone 3</option>
            </select>
          </div>
        </div>

        <div className='section'>
          <label htmlFor="secteurInput"></label>
          <div className='container-sectionListe'>
            <select id="secteurInput" required>
              {/* Options de la liste déroulante */}
              <option value="option1">Section *</option>
              <option value="option2">Section A</option>
              <option value="option2">Section B</option>
            </select>
          </div>
        </div>

      </div>

      {/* 6. Deux inputs "Telephone 1 *" et "Telephone 2" */}
      <div className='Tel1-2'>

        <div className='Tel1'>
          <label htmlFor="telephone1Input"></label>
          <div className='container-Tel1Input'>
            <input type="tel" id="telephone1Input" required placeholder='Telephone 1 *'/>
          </div>
        </div>

        <div className='Tel2'>
          <label htmlFor="telephone2Input"></label>
          <div className='container-Tel2Input'>
            <input type="tel" id="telephone2Input" placeholder='Telephone 2'/>
          </div>
        </div>

      </div>

      {/* 7. Input "Montant *" */}
      <div className='container-montant'>
        <label htmlFor="montantInput"></label>
        <div className='container-montantInput'>
          <input type="text" id="montantInput" required placeholder='Montant *'/>
        </div>
      </div>

      {/* 8. Input "Categorie *" (liste déroulante) */}
      <div className='categorie'>
        <label htmlFor="categorieInput"></label>
        <div className='container-categorieSelect'>
          <select id="categorieInput" required>
            {/* Options de la liste déroulante */}
            {/* Le 1erLabel désactivé pour être le premier élément visible */}
            <option value="" disabled hidden>Choisissez une catégorie</option>
            <option value="option1">Categorie *</option>
            <option value="option2">Categorie 1</option>
            <option value="option2">Categorie 2</option>
            {/* ... Autres options ... */}
          </select>
        </div>
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
