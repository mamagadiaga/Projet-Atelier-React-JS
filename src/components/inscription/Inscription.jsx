import React from 'react';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png'
import {Link} from 'react-router-dom'; 

const Inscription = () => {
  return (
    <div className='container text-start d-flex justify-content-center pdgtop p-5'>
    <Form className='w-50 formulaire'>
        <div className='text-center'>
           <img src={Bakeli} className='' height={100} width={100} />
           <h4 className='text-warning mb-3'>INSCRIPTION</h4>
        </div>
                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicTel">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="tel" />
                </Form.Group>
                <Link to="#" className="btn btn-success w-100 mb-3">S'inscrire</Link> 
                <Link to="/connexion" className="float-end text-decoration-none text-secondary">Vous avez deja un compte?</Link>
            </Form>
        </div>
  )
}

export default Inscription
