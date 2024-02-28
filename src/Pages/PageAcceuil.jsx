import React from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '../Styles/PageAcceuil.css';

function PageAcceuil() {

  return (
      <div className="container">


         {/* 1. Logo au centre de la page */}
         <div className="logo-container">
            <img src="/LogoGoblo.png" alt="Logo" className="logo" />
         </div>

         <div className='conteneur'>
            {/* 2. Div principale avec 6 boutons */}
            <div className="main-container">
               
               {/* Bouton 1 */}
               <Link to="/enrolement" className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Enroler.png" alt="Enroler" />
                  </div>
                  {/* Titre */}
                  <h2>Enrôler</h2>
                  {/* Texte en dessous du titre */}
                  <p>Enregistrer les contribuables</p>
               </Link>


               <Link to="/encaissement" className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Encaisser.png" alt="Encaisser" />
                  </div>
                  {/* Titre */}
                  <h2>Encaisser</h2>
                  {/* Texte en dessous du titre */}
                  <p>Encaisser les contribuables</p>
               </Link>

               <button className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Rapport.png" alt="Rapport" />
                  </div>
                  {/* Titre */}
                  <h2>Rapport</h2>
                  {/* Texte en dessous du titre */}
                  <p>Consulter les rapports</p>
               </button>

               <button className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Compte.png" alt="Compte" />
                  </div>
                  {/* Titre */}
                  <h2>Compte</h2>
                  {/* Texte en dessous du titre */}
                  <p>Créer les comptes utilisateurs</p>
               </button>

               <button className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Controler.png" alt="Controler" />
                  </div>
                  {/* Titre */}
                  <h2>Contrôler</h2>
                  {/* Texte en dessous du titre */}
                  <p>Contrôler les contribuables</p>
               </button>

               <button className="sub-button">
                  {/* Icône dans un cercle */}
                  <div className="circle-icon">
                     <img src="/Decaisser.png" alt="Decaisser" />
                  </div>
                  {/* Titre */}
                  <h2>Décaisser</h2>
                  {/* Texte en dessous du titre */}
                  <p>Effectuer les décaissements</p>
               </button>
            </div>
         </div>

         {/* 3. Footer */}
         <Footer />
      </div>
  );
}

export default PageAcceuil;
