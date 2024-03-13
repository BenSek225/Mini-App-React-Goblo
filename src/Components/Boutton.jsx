// src/components/Boutton.jsx
// Position:  \src\Components\Boutton.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/Boutton.css';


function Boutton({ texte, onClick}) {
  return (
    <div className="container m-1 mt-5 mb-5">
      <Button variant="primary" onClick={onClick}>
        {texte}
      </Button>
  </div>
  );
}

export default Boutton;
