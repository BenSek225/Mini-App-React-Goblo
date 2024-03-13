// src/pages/ResetPasswordPage.jsx
import React, { useState } from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from  '../firebase-config';

function ResetPasswordPage() {

   const navigate = useNavigate();
   const [email, setEmail] = useState('');

   const handleResetPassword = async (e) => {
      e.preventDefault();

      try {
         await sendPasswordResetEmail(auth, email);
         alert('Un e-mail de réinitialisation du mot de passe a été envoyé.');
         navigate('/');
      } catch (error) {
         console.error('Erreur lors de la réinitialisation du mot de passe:', error.message);
         alert('Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer.');
      }
   };

   return (

      <div className="Page">

         {/* 1. Logo au centre de la page */}
         <div className="logo text-center">
            <img src="/LogoGoblo.png" alt="Logo" className="img-fluid rounded-circle" />
         </div>

         {/* 2. Input pour l'email */}
         <div className='input-box'>
            <div className="input-group mb-3">
               <span className="input-group-text" id="userIcon">
                  <i className="bi bi-envelope-at-fill fs-2"></i>
               </span>
               <input
                  type="email"
                  placeholder="Votre Adresse email"
                  className="form-control bg-custom-color"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
         </div>

         {/* 3. Bouton D'envoie de la demande */}
         <Boutton texte="Envoyer la demande" onClick={handleResetPassword}/>

         {/* 4. Lien pour le retour a la pageLogin */}
         <p className="text-center"> <Link to="/"> Retour à la page de connexion </Link> </p>

         {/* 5. Footer */}
         <Footer />
      </div>

   );
}

export default ResetPasswordPage;
