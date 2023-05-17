import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png';
import Input from '../input/Input';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Bienvenue from '../bienvenue/Bienvenue'


const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [connexion, setConnexion] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const send = (event) => {
    event.preventDefault();
    setConnexion(true);
  };

  return (
    <div className='container text-start d-flex justify-content-center p-5'>
      {connexion ? (
        <Bienvenue email={email} password={password} />
      ) : (
        <Form className='w-50 formulaire' onSubmit={send}>
          <div className='text-center'>
            <img src={Bakeli} height={100} width={100} />
            <h4 className='text-primary mb-3'>CONNEXION</h4>
          </div>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Input
              type='email'
              label=' Adresse email'
              value={email}
              onChange={emailChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Input
              type='password'
              label='Mot de passe'
              value={password}
              onChange={passwordChange}
            />
          </Form.Group>
          <Link to='/lost' className='text-decoration-none text-secondary'>
            Mot de passe oublié
          </Link>
          <button className='mt-3 btn btn-primary text-white w-100'>
            Se connecter
          </button>
          <Row className='mt-3 float-end'>
            <Link to='/inscription' className=''>
              S'inscrire
            </Link>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default Connexion;
