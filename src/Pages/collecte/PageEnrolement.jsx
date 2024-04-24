// src/pages/PageEnrolement.jsx

import React, { useState, useEffect }  from 'react';
import Boutton from '../../Components/Boutton';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from  '../../firebase-config';
import { BsList } from 'react-icons/bs'; 
import {
  Input,
  Select,
  Option,
  Navbar, 
  Typography, 
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { collection, addDoc, getDocs } from 'firebase/firestore';

function PageEnrolement() {

  const [open, setOpen] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [formData, setFormData] = useState({
      NomPrenom: "",
      RaisonSociale: "",
      Zone: "", // Initialisez comme une chaîne vide
      Secteur: "",
      Tel1: "",
      Tel2: "",
      Montant: "",
      Categorie: ""
  });
  const [categories, setCategories] = useState([]);
  const [zones, setZones] = useState([]);
  const [secteurs, setSecteurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchZones();
    fetchCategories();
  }, []);

  const fetchZones = async () => {
    try {
        const zonesSnapshot = await getDocs(collection(db, 'zone'));
        console.log("Zones récupérées :", zonesSnapshot.docs.map(doc => doc.data()));
       if (!zonesSnapshot.empty) { // Vérifiez si des données sont disponibles
          const zoneData = zonesSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          }));
          setZones(zoneData);
      }
    } catch (error) { 
        console.error('Error fetching zones:', error);
    }
  };

  const fetchSecteurs = async (zone) => {
    try {
        const secteursSnapshot = await getDocs(collection(db, 'zone', zone, 'secteurs'));
        console.log("secteurs récupérés :", secteursSnapshot.docs.map(doc => doc.data()));
        const secteurNames = secteursSnapshot.docs.map(doc => doc.data());
        setSecteurs(secteurNames);
    } catch (error) {
        console.error('Error fetching secteurs:', error);
    }
  };

  const fetchCategories = async () => {
    try {
        const categoriesSnapshot = await getDocs(collection(db, 'categorie'));
        console.log("catégories récupérées :", categoriesSnapshot.docs.map(doc => doc.data()));
        if (!categoriesSnapshot.empty) {
          const categorieData = categoriesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setCategories(categorieData);
          }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const Matricule = generateMatricule(); // Générer le matricule aléatoire
        setFormData(prevFormData => ({
        ...prevFormData,
        Matricule: Matricule
        }));
        const formDataWithMatricule = { ...formData, Matricule }; // Ajouter le matricule aux données du formulaire
        console.log("(handleSubmit) Données soumises avec ajout du matricule :", formDataWithMatricule);
        const docRef = await addDoc(collection(db, "commercants"), formDataWithMatricule);
        console.log("Document written with ID: ", docRef.id);
        setOpen(true);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
  };

  const handleChange = (name, value) => {
    console.log("(handleChange) le contenu de la variable name et value :", name, value)
    if (value !== undefined) {
        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
        }));
        if (name === "Zone") { // État pour suivre la zone sélectionnée, si elle est choisi on lance la recherche des secteurs correspondant
          fetchSecteurs(value);
        }
    }
  };

  // Fonction pour générer un matricule aléatoire de 6 caractères
  const generateMatricule = () => {
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    // Convertir le nombre en chaîne et supprimer les espaces
    const matricule = randomNumber.toString().replace(/ /g, '');
    return matricule;
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

        <div className="h-screen flex flex-col bg-gray-100 justify-center">
          <div className='w-full p-8 mx-auto'>

            <div className="logo flex justify-center items-center mt-1 mb-1">
                <img src="/logo/LogoGoblo.png" alt="Logo" className="w-20 h-20 rounded-full" />
            </div>

            {/* 1. Titre "Enrôler" */}
            <div className="text-center mt-2">
              <h1 className="text-3xl font-bold mb-0"> Enrôler </h1>
              <p className="text-gray-500">Les contribuables</p>
            </div>

            
            <form className=" mt-2 flex flex-col space-y-4 px-4 md:px-0 md:max-w-lg mx-auto">
                {/* 2. Input "Nom et prénom *" */}
                <Input
                    required
                    label="Nom et prénom"
                    color="gray"
                    name="nomPrenom"
                    value={formData.NomPrenom}
                    onChange={(e) => handleChange("NomPrenom", e.target.value)}
                />

                {/* 3. Input "Raison social" */}
                <Input
                    label="Raison sociale"
                    color="gray"
                    name="raisonSociale"
                    value={formData.RaisonSociale}
                    onChange={(e) => handleChange("RaisonSociale", e.target.value)}
                />

                {/* 4. Deux inputs "Zone *" et "Secteur *" */}
                <Select
                  label="Zone"
                  animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                  }}
                  name="zone"
                  value={formData.Zone}
                  onChange={(value) => handleChange("Zone", value)}
                >
                  {zones.map(zone => (
                      <Option key={zone.id} value={zone.id}>{zone.Nom}</Option>
                  ))}
                </Select>

                <Select
                  label="Secteur"
                  animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                  }}
                  name="secteur"
                  value={formData.Secteur}
                  onChange={(value) => handleChange("Secteur", value)}
                >
                  {secteurs.map(secteur => (
                      <Option key={secteur.id} value={secteur.Nom}>{secteur.Nom}</Option>
                  ))}
                </Select>

                {/* 5. Deux inputs "Telephone 1 *" et "Telephone 2" */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Input
                      label="Téléphone 1"
                      required
                      color="gray"
                      name="Tel1"
                      value={formData.Tel1}
                      onChange={(e) => handleChange("Tel1", e.target.value)}
                  />
                  <Input
                      label="Téléphone 2"
                      color="gray"
                      name="Tel2"
                      value={formData.Tel2}
                      onChange={(e) => handleChange("Tel2", e.target.value)}
                  />
                </div>

                {/* 6. Input "Montant *" */}
                <Input
                    label="Montant"
                    required
                    color="gray"
                    name="Montant"
                    value={formData.Montant}
                    onChange={(e) => handleChange("Montant", e.target.value)}
                />

                {/* 7. Input "Categorie *" (liste déroulante) */}
                <Select
                  label="Catégorie"
                  animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                  }}
                  name="Categorie"
                  value={formData.Categorie}
                  onChange={(value) => handleChange("Categorie", value)}
                >
                  {categories.map(categorie => (
                      <Option key={categorie.id} value={categorie.Nom}>{categorie.Nom}</Option>
                  ))}
                </Select>

                {/* 8. Mon composant boutton qui appel un Dilog */}
                <div className="flex justify-center">
                  <Boutton 
                      texte="Enregistrer"
                      onClick={handleSubmit}
                  />
                </div>
            </form>

            <>
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
                      <h2 className="text-4xl font-bold mb-4">Enregistrement réussi</h2>
                      <p className='text-2xl'> <span> {formData.NomPrenom} </span> a le matricule N°</p>
                      <h1 className='text-2xl font-bold'> {formData.Matricule} </h1>
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
