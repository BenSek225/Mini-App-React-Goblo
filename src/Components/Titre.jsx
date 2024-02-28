// src/components/Titre.jsx

import React from 'react';
import '../Styles/Titre.css';

function Titre({ titrePage }) {
  return (
    <div className="titre-container">
      <h1 className="titre-h1">{titrePage}</h1>
      <p className="titre-p">Les contribuables</p>
    </div>
  );
}

export default Titre;
