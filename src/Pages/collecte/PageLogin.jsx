import React, { useState } from 'react';
import { Input, Checkbox } from '@material-tailwind/react';
import { useNavigate, Link } from 'react-router-dom';
import { HiUser, HiLockClosed} from 'react-icons/hi';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Boutton from '../../Components/Boutton';
import Footer from '../../Components/Footer';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert('Connexion réussie');
        navigate('/acceuil');
      })
      .catch((error) => {
        console.error('Erreur de connexion: ', error.message);
        alert('Erreur : ' + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mx-auto">

        {/* 1. Logo au centre de la page */}
        <div className="text-center">
            <img className="mx-auto w-20 h-20 mb-4" src="/logo/LogoGoblo.png" alt="Logo de l'application" />
        </div>

        <form className="mt-8">

          {/* 2. Le input email */}
          <div className="w-full mb-8">
                <Input
                  label="Votre login" 
                  placeholder=" "
                  icon = {<HiUser className='h-6 w-6'/>}
                  type="email"
                  color="gray"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
          </div>

          {/* 3. Le input mot de passe */}
          <div className="w-full ">
                <Input 
                  label="Votre mot de passe" 
                  placeholder=" "
                  icon = {<HiLockClosed className='h-6 w-6'/>}
                  type="password"
                  color="gray"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
          </div>

          {/* 4. Le check box */}
          <div className="flex items-center mb-3 justify-between">

            <div>
              <Checkbox 
                color="dark"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)} />
              <span className="text-sm text-gray-600">Se rappeler de moi</span>
            </div>

            <div className="text-sm text-center">
              <Link to="/reset-password" className="font-medium text-dark-600 hover:text-blue-500">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>

          {/* 5. Mon composant boutton */}
          <Boutton 
            texte="Connexion" 
            type="submit" 
            onClick={handleLogin}
          />

        </form>

        {/* 6. Mon composant footer */}
        <div className="text-center mt-50">
          <Footer/>
        </div>

      </div>
    </div>
    
  );
}

export default LoginPage;