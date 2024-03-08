import React from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '../Styles/PageAcceuil.css';

function PageAcceuil() {

   return (
      <div className="acceuil-container">


         {/* 1. Logo au centre de la page */}
         <div className="container-logo">
            <img src="/LogoGoblo.png" alt="Logo" className="img-fluid rounded-circle" />
         </div>
         
         
         {/* 2. Div principale avec 6 boutons */}
         <div className="group-container col mt-5">

            <div className="row">
               {/* Élément 1 */}
               <div className="col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     <Link to="/enrolement" className="link">
                        {/* Icône dans un cercle */}
                        <div className="circle-icon">
                           {/* <i className="bi bi-people custom-fs"></i>
                           <span className="custom-plus">+</span> */}
                           <img src="/Enroler.png" alt="Enroler"/>
                        </div>
                        {/* Titre */}
                        <h2>Enrôler</h2>
                        {/* Texte en dessous du titre */}
                        <p>Enregistrer les contribuables</p>
                     </Link>
                  </div>
               </div>

               {/* Élément 2 */}
               <div className="col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     {/* Icône dans un cercle */}
                     <div className="circle-icon">
                        {/* <i className="bi bi-graph-up custom-fs"></i> */}
                        <img src="/Rapport.png" alt="Rapport"/>
                     </div>
                     {/* Titre */}
                     <h2>Rapport</h2>
                     {/* Texte en dessous du titre */}
                     <p>Consulter les rapports</p>
                  </div>
               </div>
            </div>

            <div className="row">
               {/* Élément 3 */}
               <div className=" col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     {/* Icône dans un cercle */}
                     <div className="circle-icon">
                        <img src="/Controler.png" alt="Controle"/>
                     </div>
                     {/* Titre */}
                     <h2>Contrôler</h2>
                     {/* Texte en dessous du titre */}
                     <p>Contrôler les contribuables</p>
                  </div>
               </div>
               
               {/* Élément 4 */}
               <div className=" col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     <Link to="/encaissement" className='link'>
                        {/* Icône dans un cercle */}
                        <div className="circle-icon">
                           {/* <i className="bi bi-wallet custom-fs"></i> */}
                           <img src="/Encaisser.png" alt="Encaisser"/>
                        </div>
                        {/* Titre */}
                        <h2>Encaisser</h2>
                        {/* Texte en dessous du titre */}
                        <p>Encaisser les contribuables</p>
                     </Link>
                  </div>
               </div>

            </div>

            <div className="row">
               {/* Élément 5 */}
               <div className=" col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     {/* Icône dans un cercle */}
                     <div className="circle-icon">
                        {/* <i className="bi bi-person custom-fs"></i> */}
                        <img src="/Compte.png" alt="Compte"/>
                     </div>
                     {/* Titre */}
                     <h2>Compte</h2>
                     {/* Texte en dessous du titre */}
                     <p>Créer les comptes utilisateurs</p>
                  </div>
               </div>

               {/* Élément 6 */}
               <div className=" col-6 col-md-6 mb-4">
                  <div className="box-seul">
                     {/* Icône dans un cercle */}
                     <div className="circle-icon">
                        {/* <i className="bi bi-wallet-fill custom-fs"></i> */}
                        <img src="/Decaisser.png" alt="Decaisser"/>
                     </div>
                     {/* Titre */}
                     <h2>Décaisser</h2>
                     {/* Texte en dessous du titre */}
                     <p>Effectuer les décaissements</p>
                  </div>
               </div>
            </div>
         </div>


         {/* 3. Footer */}
         <Footer />

         
      </div>
   );
}

export default PageAcceuil;
