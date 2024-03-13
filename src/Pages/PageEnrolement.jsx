// src/pages/PageEnrolement.jsx
// Position: \src\Pages\PageEnrolement.jsx

import React, { useState }  from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import Titre from '../Components/Titre';
import { useNavigate } from 'react-router-dom';
import PopupEnroler from './PopupEnroler';
import '../Styles/PageEnrolement.css';

import { signOut } from 'firebase/auth';
import { auth } from  '../firebase-config';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
                  <Nav.Link href="/encaissement"> Encaisser </Nav.Link>
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

      <div className='Page'>

        {/* 1. Titre "Enrôler" */}
        <Titre titrePage="Enrôler"/>

        {/* 2. Input "Nom et prénom *" */}
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


        {/* 3. Input "Raison social" */}
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

        {/* 4. Deux inputs "Zone *" et "Secteur *" */}
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

        {/* 5. Deux inputs "Telephone 1 *" et "Telephone 2" */}
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

        {/* 6. Input "Montant *" */}
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

        {/* 7. Input "Categorie *" (liste déroulante) */}
        <div className="add-margin">
          <select className="form-select custom-form-select border-0 border-bottom border-black">
            <option>Categorie *</option>
            <option>Categorie 1</option>
            <option>Categorie 2</option>
            <option>Categorie </option>
          </select>
        </div>

        {/* 8. Bouton "Enregistrer" */}
        <Boutton texte="Enregistrer" onClick={handleEnroler}/>

        {/* Pop-up de succès */}
        {showPopupEnroler && <PopupEnroler Nomprenom={Nomprenom} onClose={handleClosePopupEnroler} />}

        {/* 9. Footer */}
        <Footer />
      </div>

    </>
  );
}

export default PageEnrolement;
