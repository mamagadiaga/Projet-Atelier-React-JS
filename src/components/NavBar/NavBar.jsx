import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto gap-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className='text-decoration-none text-dark'>Home</Link>
              <Link to="/about" className='text-decoration-none text-dark'>About</Link>
              <Link to="/contact" className='text-decoration-none text-dark'>Contact</Link>
            </Nav>
              <Link to="/connexion" className="btn btn-outline-success ms-5">DECONNEXION</Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;