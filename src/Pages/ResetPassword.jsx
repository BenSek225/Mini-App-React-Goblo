// src/pages/ResetPasswordPage.jsx
import React, { useState } from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import { Input } from '@material-tailwind/react';
import { HiOutlineMail } from 'react-icons/hi';

import { useNavigate, Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase-config';

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
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
         <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mx-auto">
            {/* 1. Logo au centre de la page */}
            <div className="text-center">
               <img className="mx-auto w-20 h-20 mb-4" src="/LogoGoblo.png" alt="Logo de l'application" />
            </div>

            <form className="mt-8">
               
               {/* 2. Input pour l'email */}
               <div className="w-full mb-8">
                  <Input
                     label="Votre Adresse email" 
                     placeholder=" "
                     icon = {<HiOutlineMail className='h-6 w-6'/>}
                     type="email"
                     color="gray"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
               </div>

               {/* 3. Bouton D'envoie de la demande */}
               <Boutton
                  texte="Envoyer la demande"
                  type = "submit"
                  onClick={handleResetPassword}
               />

            </form>

            {/* 4. Lien pour le retour a la pageLogin */}
            <div className="text-center mb-20 text-sm"> 
               <Link to="/" className="font-medium text-dark-600 hover:text-blue-500">
                  Retour à la page de connexion
               </Link>
            </div>

            {/* 5. Footer */}
            <Footer />

         </div>
      </div>
   );
}

export default ResetPasswordPage;
