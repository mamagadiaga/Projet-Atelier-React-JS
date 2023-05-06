import React from 'react';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png'
import {Link} from 'react-router-dom';

const Lost = () => {
  return (
        <div className='container text-start d-flex justify-content-center p-5'>
            <Form className='w-50 formulaire'>
            <div className='text-center'>
            <img src={Bakeli}  height={100} width={100} />
            <h4 className='text-warning mb-3'>RECUPERATION MOT DE PASSE</h4>
            <p>
                Nous vous enverrons un lien de reinitialisation de votre mot de passe sur 
                l'adresse email que vous avez saisi lors de votre premiere connexion.
            </p>
            </div>
                <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Entrez votre email" />
                </Form.Group>
                <Link to="/connexion" className="btn btn-danger w-100 float-end">Valider</Link>
            </Form>
        </div>
  )
}

export default Lost
