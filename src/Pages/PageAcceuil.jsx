import React, { useState } from 'react';
import Footer from '../Components/Footer'; 
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from  '../firebase-config';
import { BsList } from 'react-icons/bs';
import {
   Navbar, 
   Typography,
} from "@material-tailwind/react";

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
   const [showMenu, setShowMenu] = useState(false);

   return (

      <>
            <Navbar className="bg-black w-full m-1 text-white py-4 mx-auto max-w-none">
               <div className="flex items-center justify-between w-full">
                  <Typography
                  as="a"
                  href="/acceuil"
                  variant="h6"
                  className="cursor-pointer py-1.5 mr-auto text-white"
                  >
                  Goblo
                  </Typography>
                  <div className="hidden lg:flex items-center ml-auto">
                  <Typography
                     as="a"
                     href="#"
                     variant="body"
                     className="text-white mx-4 cursor-pointer"
                  >
                     Mon Compte
                  </Typography>
                  <Typography
                     as="a"
                     href="#"
                     variant="body"
                     className="text-white cursor-pointer"
                     onClick={handleLogout}
                  >
                     Déconnexion
                  </Typography>
                  </div>
                  <BsList
                  className="block lg:hidden text-white cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                  />
               </div>
               {showMenu && (
                  <div className="lg:hidden flex flex-col items-center mt-4">
                  <Typography
                     as="a"
                     href="#"
                     variant="body"
                     className="text-white mb-2 cursor-pointer"
                  >
                     Mon Compte
                  </Typography>
                  <Typography
                     as="a"
                     href="#"
                     variant="body"
                     className="text-white cursor-pointer"
                     onClick={handleLogout}
                  >
                     Déconnexion
                  </Typography>
                  </div>
               )}
            </Navbar>

         <div className="max-w-screen-md mx-auto">

            {/* 1. Logo au centre de la page */}
            <div className="logo flex justify-center items-center mt-8 mb-8">
               <img src="/LogoGoblo.png" alt="Logo" className="w-32 h-32 rounded-full" />
            </div>
            
            {/* 2. Div principale avec 6 boutons */}
            <div className="max-w-screen-lg mx-auto relative p-4 col mt-5">

               <div className="flex flex-wrap justify-between">
                  {/* Élément 1 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        <Link to="/enrolement" style={{ textDecoration: 'none' }}>
                           {/* Icône dans un cercle */}
                           <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                              {/* <i className="bi bi-people custom-fs"></i>
                              <span className="custom-plus">+</span> */}
                              <img src="/Enroler.png" alt="Enroler" className="max-w-[80%] max-h-80 rounded-full"/>
                           </div>
                           {/* Titre */}
                           <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Enrôler</h2>
                           {/* Texte en dessous du titre */}
                           <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Enregistrer les contribuables</p>
                        </Link>
                     </div>

                  </div>

                  {/* Élément 2 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        <Link to="/encaissement" style={{ textDecoration: 'none' }}>
                           {/* Icône dans un cercle */}
                           <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                              {/* <i className="bi bi-wallet custom-fs"></i> */}
                              <img src="/Encaisser.png" alt="Encaisser" className="max-w-[80%] max-h-80 rounded-full"/>
                           </div>
                           {/* Titre */}
                           <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Encaisser</h2>
                           {/* Texte en dessous du titre */}
                           <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Encaisser les contribuables</p>
                        </Link>
                     </div>

                  </div>

                  {/* Élément 3 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        {/* Icône dans un cercle */}
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                           <img src="/Controler.png" alt="Controle" className="max-w-[80%] max-h-80 rounded-full"/>
                        </div>
                        {/* Titre */}
                        <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Contrôler</h2>
                        {/* Texte en dessous du titre */}
                        <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Contrôler les contribuables</p>
                     </div>

                  </div>

                  {/* Élément 4 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        {/* Icône dans un cercle */}
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                           {/* <i className="bi bi-graph-up custom-fs"></i> */}
                           <img src="/Rapport.png" alt="Rapport" className="max-w-[80%] max-h-80 rounded-full"/>
                        </div>
                        {/* Titre */}
                        <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Rapport</h2>
                        {/* Texte en dessous du titre */}
                        <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Consulter les rapports</p>
                     </div>

                  </div>

                  {/* Élément 5 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        {/* Icône dans un cercle */}
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                           {/* <i className="bi bi-person custom-fs"></i> */}
                           <img src="/Compte.png" alt="Compte" className="max-w-[80%] max-h-80 rounded-full"/>
                        </div>
                        {/* Titre */}
                        <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Compte</h2>
                        {/* Texte en dessous du titre */}
                        <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Créer les comptes utilisateurs</p>
                     </div>

                  </div>

                  {/* Élément 6 */}
                  <div className="flex-item">

                     <div className="bg-gray-300 rounded-xl p-2.5">
                        {/* Icône dans un cercle */}
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center">
                           {/* <i className="bi bi-wallet-fill custom-fs"></i> */}
                           <img src="/Decaisser.png" alt="Decaisser" className="max-w-[80%] max-h-80 rounded-full"/>
                        </div>
                        {/* Titre */}
                        <h2 className="text-2xl font-bold leading-7 tracking-wide text-black mt-6">Décaisser</h2>
                        {/* Texte en dessous du titre */}
                        <p className="text-lg font-normal leading-6 tracking-wide text-black mt-2">Effectuer les décaissements</p>
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
