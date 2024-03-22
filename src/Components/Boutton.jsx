// Position:  \src\Components\Boutton.jsx

import React from 'react';
import { Button } from '@material-tailwind/react';

function Boutton({ texte, onClick }) {
  return (
    <div className="mt-5 mb-5 w-full">
      <Button
        color="black"
        ripple="light"
        onClick={onClick}
        className="w-full bg-black py-2.5 text-white font-bold text-sm focus:outline-none hover:bg-gray-800 rounded-md"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {texte}
      </Button>
    </div>
  );
}

export default Boutton;
