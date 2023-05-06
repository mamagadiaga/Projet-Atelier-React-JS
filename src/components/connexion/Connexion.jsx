import React from 'react';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png'
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';


const Connexion = () => {
  return (
        <div className='container text-start d-flex justify-content-center  p-5'>
                <Form className='w-50 formulaire'>
                    <div className='text-center'>
                       <img src={Bakeli} className='' height={100} width={100} />
                       <h4 className='text-primary mb-3'>CONNEXION</h4>
                    </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address Email</Form.Label>
            <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        <Link to="/lost" className="text-decoration-none text-secondary">Mot de passe oublié</Link>
        <Link to="/bienvenue" className="mt-3 btn btn-primary text-white w-100">Se connecter</Link>
        <Row className='mt-3 float-end'>
        <Link to="/inscription" className="">S'inscrire</Link>
        </Row>
        </Form>
        </div>
  )
}

export default Connexion
