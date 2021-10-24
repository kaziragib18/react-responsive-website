import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo-2.PNG'
import './Header.css'
const Header = () => {
      const { user, logOut } = useAuth();
      return (
            <>
                  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                        <Container>
                              <Navbar.Brand href="#home"><img className="logo__img" src={logo} alt="" /></Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                    <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                                    {
                                          user.displayName ?
                                                <Button onClick={logOut} variant="primary" className="rounded-pill px-2 py-1 me-2">Sign out</Button> :

                                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                                    }
                                    <Navbar.Text>
                                          <a className="logged__user" href="#login">{user.displayName}</a>
                                    </Navbar.Text>
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </>
      );
};

export default Header;