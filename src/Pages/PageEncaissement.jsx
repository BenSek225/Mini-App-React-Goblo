// src/pages/PageEncaissement.jsx
// Position: \src\Pages\PageEncaissement.jsx

import React, { useState } from 'react';
import Titre from '../Components/Titre';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import PopupEncaisser from './PopupEncaisser';
import { useNavigate } from 'react-router-dom';
import '../Styles/PageEncaissement.css';

import { signOut } from 'firebase/auth';
import { auth } from  '../firebase-config';
import { Navbar, Nav, Container } from 'react-bootstrap';

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

          <Navbar.Brand>
            <span onClick={handleBack} style={{ cursor: 'pointer' }}>
              <i className="bi bi-arrow-left-circle-fill fs-1"></i>
            </span>
          </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='mr-4'>
                <Nav className="ml-auto">
                  <Nav.Link href="/acceuil"> Mon Compte </Nav.Link>
                  <div className="pc-separator"></div>
                  <div className="mobile-separator"></div>
                  <Nav.Link href="/enrolement"> Enrôler </Nav.Link>
                  <Nav.Link href="/acceuil"> Contrôler </Nav.Link>
                  <Nav.Link href="/acceuil"> Rapport </Nav.Link>
                  <Nav.Link href="/acceuil"> Compte </Nav.Link>
                  <Nav.Link href="/acceuil"> Décaisser </Nav.Link>
                  <div className="pc-separator"></div>
                  <div className="mobile-separator"></div>
                  <Nav.Link onClick={handleLogout}> Se Déconnecter </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <div className="Page">
        
        {/* 1. Titre "Encaisser" */}
        <Titre titrePage="Encaisser"/>

        {/* 2. Input "Matricule *" */}
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

        {/* 3. Appeler le composant Boutton avec le texte "Encaisser" */}
        <Boutton texte="Encaisser" onClick={handleEncaisser}/>
        {/* Pop-up de succès */}
        {showPopupEncaisser && <PopupEncaisser onClose={handleClosePopupEncaisser} />}
        
        {/* 4. Appeler le Footer */}
        <Footer/>
      </div>
    </>
  );
}

export default PageEncaissement;
