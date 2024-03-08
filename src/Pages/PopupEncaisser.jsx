import React, { useEffect, useState } from 'react';
import '../Styles/Popup.css';

function PopupEncaisser({ onClose }) {
  const [randomNumbers, setRandomNumbers] = useState('');
  
  useEffect(() => {
    // Génère quatre chiffres aléatoires
    const generateRandomNumbers = () => {
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      setRandomNumbers(randomNumber.toString().split('').join(' '));
    };

    generateRandomNumbers();
  }, []); // Le tableau vide [] fait en sorte que cela s'exécute une seule fois lors du montage initial

  return (
    <div className="popup-overlay">
      <div className="popup-content text-center">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Encaissement réussi</h2>
        <p> <span> M. TETCHI </span> a payé</p>
        <h1>10.000 FCFA</h1>
        <p>et a reçu le N°</p>
        <h1>{randomNumbers}</h1>
      </div>
    </div>
  );
}

export default PopupEncaisser;
