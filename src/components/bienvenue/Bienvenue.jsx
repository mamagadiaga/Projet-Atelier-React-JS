import React from 'react'
import NavBar from '../../components/NavBar/NavBar';

const Bienvenue = ({ email, password }) => {
  return (
        <div className='text-center bg-info text-white p-5'>
            <NavBar />
            
            <h1 className='mt-5 p-5'>Bienvenue, cher utilisateur ! <br />
                Voici vos informations de connexion</h1>
            <p>E-mail : <span className='fw-bold'>{email}</span></p>
            <p>Mot de passe : <span className='fw-bold'>{password}</span></p>
        </div>
  );
}

export default Bienvenue;
