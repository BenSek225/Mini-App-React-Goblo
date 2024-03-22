// src/pages/PageEncaissement.jsx

import React, { useState, useEffect } from 'react';
import Boutton from '../Components/Boutton';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from  '../firebase-config';
import { BsList } from 'react-icons/bs'; 
import {
  Input,
  Navbar, 
  Typography, 
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function PageEncaissement() {

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

  const [randomNumbers, setRandomNumbers] = useState('');
  useEffect(() => {
    // Génère quatre chiffres aléatoires
    const generateRandomNumbers = () => {
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      setRandomNumbers(randomNumber.toString().split('').join(' '));
    };

    generateRandomNumbers();
  }, []); // Le tableau vide [] fait en sorte que cela s'exécute une seule fois lors du montage initial

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
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
                href="/enrolement"
                variant="body"
                className="text-white mx-2 cursor-pointer"
              >
                Enrôler
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white mx-2 cursor-pointer"
              >
                Contrôler
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white mx-2 cursor-pointer"
              >
                Rapport
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white mx-2 cursor-pointer"
              >
                Compte
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white mx-2 mr-4 cursor-pointer"
              >
                Décaisser
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
                href="/enrolement"
                variant="body"
                className="text-white cursor-pointer"
              >
                Enrôler
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white cursor-pointer"
              >
                Contrôler
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white cursor-pointer"
              >
                Rapport
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white cursor-pointer"
              >
                Compte
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="body"
                className="text-white mb-2 cursor-pointer"
              >
                Décaisser
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

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className="max-w-md w-full p-8 mx-auto">

          <div className="logo flex justify-center items-center mt-1 mb-1">
              <img src="/LogoGoblo.png" alt="Logo" className="w-20 h-20 rounded-full" />
          </div>
          
          {/* 1. Titre "Encaisser" */}
          <div className="text-center mt-2">
            <h1 className="text-3xl font-bold mb-0">Encaisser</h1>
            <p className="text-gray-500">Les contribuables</p>
          </div>


          <div className="mt-8">

              {/* 2. Input pour le matricule */}
              <div className="w-full mb-8 mt-20">
                  <Input
                    label="Matricule" 
                    placeholder=" "
                    type="text"
                    color="gray"
                    required
                  />
              </div>

              {/* 3. Mon composant boutton qui appel un Dilog */}
              <>
                <Boutton
                  texte="Encaisser"
                  onClick={handleOpen}
                />
                <Dialog 
                  open={open} 
                    size="xs" 
                    handler={handleOpen}>

                    <div className="flex items-center justify-between">
                      <DialogHeader className="flex flex-col items-start">
                      </DialogHeader>
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <DialogBody className='text-center'>
                        <h2 className="text-4xl font-bold mb-4">Encaissement réussi</h2>
                        <p className='text-2xl'> <span> M. TETCHI </span> a payé</p>
                        <h1 className='text-4xl font-bold'>10.000 FCFA</h1>
                        <p className='text-2xl'>et a reçu le N°</p>
                        <h1 className='text-2xl font-bold'>{randomNumbers}</h1>
                    </DialogBody>

                    <DialogFooter className="space-x-2">
                    </DialogFooter>
                </Dialog>
              </>

          </div>

          {/* 4. Appeler le Footer */}
          <Footer/>

        </div>
      </div>
    </>
  );
}

export default PageEncaissement;