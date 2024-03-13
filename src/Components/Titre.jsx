// src/components/Titre.jsx

import React from 'react';
import '../Styles/Titre.css';

function Titre({ titrePage }) {
  return (
    <div className="text-center mt-5">
      <h1 className="titre fs-1">{titrePage}</h1>
      <p className="s-titre fs-5">Les contribuables</p>
    </div>
  );
}

export default Titre;
