import React, { useEffect, useState } from 'react';
import '../Styles/Popup.css';

function PopupEnroler({ Nomprenom, onClose }) {
  const [randomNumbers, setRandomNumbers] = useState('');
  
  useEffect(() => {
    // Génère quatre chiffres aléatoires
    const generateRandomNumbers = () => {
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
      setRandomNumbers(randomNumber.toString().split('').join(' '));
    };

    generateRandomNumbers();
  }, []); // Le tableau vide [] fait en sorte que cela s'exécute une seule fois lors du montage initial

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Enregistrement réussi</h2>
        <p><span>{Nomprenom}</span> a le matricule N°</p>
        <h1>{randomNumbers}</h1>
      </div>
    </div>
  );
}

export default PopupEnroler;