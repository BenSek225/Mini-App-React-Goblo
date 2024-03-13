import React from 'react';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/PageAcceuil.css';

import { signOut } from 'firebase/auth';
import { auth } from  '../firebase-config';
import { Navbar, Nav, Container } from 'react-bootstrap';

function PageAcceuil() {

   const navigate = useNavigate();

   const handleLogout = () => {
      signOut( auth )
         .then(() => {
            // Sortie reussi.
            console.log('Deconnexion reussi');
            alert('Deconnexion reussi')
            navigate('/')
         })
         .catch((error) => {
            // Le contraire.
            alert(error.message);
         });
   };

   return (

      <>

         {/* Ajout d'une nav bar */}
         <Navbar bg="dark" variant="dark" expand="lg">
            <Container className='ms-5 mr-4'>
               <Navbar.Brand href="/acceuil"> Goblo </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                     <Nav.Link href="/acceuil"> Mon Compte </Nav.Link>
                     <div className="pc-separator"></div>
                     <div className="mobile-separator"></div>
                     <Nav.Link onClick={handleLogout}> Se Déconnecter </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div className="Page acceuil">

            {/* 1. Logo au centre de la page */}
            <div className="logo-ici text-center">
               <img src="/LogoGoblo.png" alt="Logo" className="img-fluid rounded-circle" />
            </div>
            
            
            {/* 2. Div principale avec 6 boutons */}
            <div className="group-container col mt-5">

               <div className="flex-container">
                  {/* Élément 1 */}
                  <div className="flex-item">

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
                  <div className="flex-item">

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

                  {/* Élément 3 */}
                  <div className="flex-item">

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
                  <div className="flex-item">

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

                  {/* Élément 5 */}
                  <div className="flex-item">

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
                  <div className="flex-item">

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
      </>
   );
}

export default PageAcceuil;
