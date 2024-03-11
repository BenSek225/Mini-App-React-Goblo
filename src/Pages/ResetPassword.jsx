// src/pages/ResetPasswordPage.jsx
import React, { useState } from 'react';
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

      <div>
         <h2>Réinitialisation du mot de passe</h2>
         <form onSubmit={handleResetPassword}>
            <label htmlFor="resetEmail">Adresse e-mail :</label>
            <input
               type="email"
               id="resetEmail"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
            <button type="submit">Envoyer la réinitialisation du mot de passe</button>
         </form>
         <Link to="/"> Retour à la page de connexion </Link>
      </div>

   );
}

export default ResetPasswordPage;
