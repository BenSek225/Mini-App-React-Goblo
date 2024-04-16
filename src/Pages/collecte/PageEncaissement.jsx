// src/pages/PageEncaissement.jsx

import React, { useState } from 'react';
import Boutton from '../../Components/Boutton';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from  '../../firebase-config';
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
import { db } from '../../firebase-config';
import { addDoc, collection, query, where, getDocs, serverTimestamp } from "firebase/firestore"; 

function PageEncaissement() {
  
  const [matricule, setMatricule] = useState("");
  const [recuPaiement, setRecuPaiement] = useState("")
  const [commercant, setCommercant] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  const handleOpen = async () => {
    if (matricule.trim() === '') {
      alert("Veuillez entrer un matricule.");
      return;
    }
    const commercantData = await fetchCommercant();
    const commercantId = commercantData.id;
    const recu = commercantData.Recu;
    console.log("les donner retourner; son ID: ", commercantId, " Et le recu: ", recu)
    if (commercantData) {
      await enregistrerPaiement(commercantData);
      setOpen(true);
    }
  };

  // Fonction pour récupérer les données des commerçants depuis Firestore
  const fetchCommercant = async () => {
    try {
    const commercantRef = collection(db, 'commercant'); // Référence à la collection "commercant"
    const q = query(commercantRef, where("Matricule", "==", matricule)); // Requête pour récupérer le commerçant correspondant au matricule entré
    const querySnapshot = await getDocs(q); // Exécute la requête
      if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const commercantData = doc.data();
          console.log('Données du commerçant const commercantData:', commercantData); // Vérifier les données du commerçant
          setCommercant(commercantData);
          const Recu = generateRecu(); //generer un nombre aleatoire en guise de recu de paiement
          setRecuPaiement(Recu);
          return {
            id: doc.id,
            Recu: Recu
          };
      } else {
          console.log("Le matricule ne correspond à aucun commerçant.");
          return false;
      }
    } catch (error) {
      console.error("Error fetching commercant: ", error);
      return  false;
    }
  };

  const generateRecu = () => {
    // Génère quatre chiffres aléatoires
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    // Convertir le nombre en chaîne et supprimer les espaces
    const recuSansEspaces = randomNumber.toString().replace(/ /g, '');
    // Définir le reçu sans espaces
    return recuSansEspaces;
  };

  // // Génère quatre chiffres aléatoires
  // const generateRecu = () => {
  //    const randomNumber = Math.floor(1000 + Math.random() * 9000);
  //    const BonRecu = randomNumber.toString().split('').join(' ');
  //    return BonRecu;
  // };

  // Fonction pour enregistrer un paiement
  const enregistrerPaiement = async (commercantData) => {
    console.log("afficher commercantData dans enregistrer paiement",  commercantData)
    // Enregistrer le paiement dans Firestore
    try {
      const docRef = await addDoc(collection(db, 'paiement'), {
          CommercantRef: commercantData.id,
          DateHeure: serverTimestamp(),
          NumeroRecu: commercantData.Recu
      });
      console.log('Paiement enregistré avec l\'ID: ', docRef.id);
      } catch (error) {
          console.error('Erreur lors de l\'enregistrement du paiement : ', error);
      }
  };


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
              <img src="/logo/LogoGoblo.png" alt="Logo" className="w-20 h-20 rounded-full" />
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
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)} 
                  // Met à jour l'état du matricule à chaque changement de valeur
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
                    handler={() => setOpen(false)}>

                    <div className="flex items-center justify-between">
                      <DialogHeader className="flex flex-col items-start">
                      </DialogHeader>
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={() => setOpen(false)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <DialogBody className='text-center'>
                        {commercant ? (
                          <>
                              <h2 className="text-4xl font-bold mb-4">Encaissement réussi</h2>
                              <p className='text-2xl'> <span className='font-bolt text-3xl'>{commercant.NomPrenom}</span> a payé</p>
                              <h1 className='text-3xl font-bold'>{commercant.Montant} FCFA</h1>
                              <p className='text-2xl'>le N° du recu est:</p>
                              <h1 className='text-2xl font-bold'>{recuPaiement}</h1>
                          </>
                        ) : (
                          <p className="text-red-500 text-3xl">Le matricule ne correspond à aucun commerçant.</p>
                        )}
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