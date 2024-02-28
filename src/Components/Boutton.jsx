// src/components/Boutton.jsx
// Position:  \src\Components\Boutton.jsx
import React from 'react';
import '../Styles/Boutton.css';


function Boutton({ texte, onClick}) {
  return (
    <div className="boutton-container">
      <button className="custom-button" onClick={onClick}>
        {texte}
      </button>
    </div>
  );
}

export default Boutton;
