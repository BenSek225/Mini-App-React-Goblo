// src/components/Boutton.jsx
// Position:  \src\Components\Boutton.jsx
import React from 'react';
import '../Styles/Boutton.css';


function Boutton({ texte, onClick}) {
  return (
    <div className="container">
      <button type="button" className="btn btn-primary" onClick={onClick}>
        {texte}
      </button>
  </div>
  );
}

export default Boutton;
