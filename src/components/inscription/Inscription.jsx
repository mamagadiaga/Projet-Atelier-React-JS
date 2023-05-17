import React from 'react';
import Form from 'react-bootstrap/Form';
import Input from '../input/Input';
import Bakeli from '../../image/Bakeli.png'
import {Link} from 'react-router-dom'; 

const Inscription = () => {
  return (
    <div className='container text-start d-flex justify-content-center pdgtop p-5'>
    <Form className='w-50 formulaire'>
        <div className='text-center'>
           <img src={Bakeli}  height={100} width={100} />
           <h4 className='text-warning mb-3'>INSCRIPTION</h4>
        </div>
                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Input type="text" label="Nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Input type="email" label="Email" />        
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicTel">
                    <Input type="tel" label="Telephone" />
                </Form.Group>
                <Link to="#" className="btn btn-success w-100 mb-3">S'inscrire</Link> 
                <Link to="/connexion" className="float-end text-decoration-none text-secondary">Vous avez deja un compte?</Link>
            </Form>
        </div>
  )
}

export default Inscription
