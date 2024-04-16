// src/pages/PageEnrolement.jsx

import React, { useState, useEffect }  from 'react';
import Boutton from '../../Components/Boutton';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from  '../../firebase-config';
import { BsList } from 'react-icons/bs'; 
import {
  Input,
  Select,
  Navbar, 
  Typography, 
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function PageEnrolement() {

  const [Nomprenom, setNomprenom] = useState('');

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [showMenu, setShowMenu] = useState(false);

  const [randomNumbers, setRandomNumbers] = useState('');
  useEffect(() => {
    // Génère quatre chiffres aléatoires
    const generateRandomNumbers = () => {
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
      setRandomNumbers(randomNumber.toString().split('').join(' '));
    };
    generateRandomNumbers();
  }, []);

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
                href="/encaissement"
                variant="body"
                className="text-white mx-2 cursor-pointer"
              >
                Encaisser
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
                href="/encaissement"
                variant="body"
                className="text-white cursor-pointer"
              >
                Encaisser
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
        <div className='max-w-md w-full p-8 mx-auto'>

          <div className="logo flex justify-center items-center mt-1 mb-1">
              <img src="/logo/LogoGoblo.png" alt="Logo" className="w-20 h-20 rounded-full" />
          </div>

          {/* 1. Titre "Enrôler" */}
          <div className="text-center mt-2">
            <h1 className="text-3xl font-bold mb-0"> Enrôler </h1>
            <p className="text-gray-500">Les contribuables</p>
          </div>

          {/* 2. Input "Nom et prénom *" */}
          <div className="w-full  mt-4 mb-6">
              <Input
                type="text"
                label="Nom et prénom" 
                placeholder=" "
                color="gray"
                value={Nomprenom}
                onChange={(e) => setNomprenom(e.target.value)}
                required
              />
          </div>


          {/* 3. Input "Raison social" */}
          <div className="w-full  mt-4 mb-6">
              <Input
                type="text"
                label="Raison social" 
                placeholder=" "
                color="gray"
              />
          </div>

          {/* 4. Deux inputs "Zone *" et "Secteur *" */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 mb-6">
            <div className="md:w-1/2">
              <Select
                label="Zone *"
                placeholder=" "
                color="gray"
                required
              >
                <option>Zone 1</option>
                <option>Zone 2</option>
                <option>Zone 3</option>
              </Select>
            </div>
            <div className="md:w-1/2">
              <Select
                label='Secteur *'
                placeholder=" "
                color="gray"
                required
              >
                <option>Section A</option>
                <option>Section B</option>
                <option>Section C</option>
              </Select>
            </div>
          </div>

          {/* 5. Deux inputs "Telephone 1 *" et "Telephone 2" */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 mb-6">
              
              <div className="md:w-1/2">
                <Input
                  type="text"
                  label='Téléphone 1'
                  placeholder=" "
                  color="gray"

                  required
                />
              </div>
              
              <div className="md:w-1/2">
                <Input
                  type="text"
                  label='Téléphone 2'
                  placeholder=" "
                  color="gray"

                />
              </div>

          </div>


          {/* 6. Input "Montant *" */}
          <div className="w-full  mt-4 mb-6">
              <Input
                type="text"
                label="Montant" 
                placeholder=" "
                color="gray"
                required
              />
          </div>

          {/* 7. Input "Categorie *" (liste déroulante) */}
          <div className="w-full  mt-4 mb-6">
            <Select
                  label='Categorie *'
                  placeholder=" "
                  color="gray"
                  required
                >
                  <option>Categorie 1</option>
                  <option>Categorie 2</option>
                  <option>Categorie 3</option>
            </Select>
          </div>

          {/* 8. Mon composant boutton qui appel un Dilog */}
          <>
            <Boutton
              texte="Enregistrer"
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
                    <h2 className="text-4xl font-bold mb-4">Enregistrement réussi</h2>
                    <p className='text-2xl'> <span> {Nomprenom} </span> a le matricule N°</p>
                    <h1 className='text-2xl font-bold'>{randomNumbers}</h1>
                </DialogBody>

                <DialogFooter className="space-x-2">
                </DialogFooter>
            </Dialog>
          </>

          {/* 9. Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PageEnrolement;
