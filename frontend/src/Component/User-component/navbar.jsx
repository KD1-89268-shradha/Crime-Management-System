import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <div className="containerNAV containerNAV-flex">
                        <div className='logocontainer'>
                            <Navbar.Brand>CRIME REPORT</Navbar.Brand>
                        </div>
                        <Nav className="me-auto">
                            <NavLink to="/home" className="listItemNAV">Home</NavLink>
                            <NavLink to="/complaints" className="listItemNAV">Complaint</NavLink>
                            <NavLink to="/status" className="listItemNAV">Track</NavLink>
                            <NavLink to="/history" className="listItemNAV">History</NavLink>
                            <NavLink to="/contact" className="listItemNAV">Contact Us</NavLink>
                        </Nav>

                         <Nav className="ms-auto">
                                <NavDropdown title="Login" id="login-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/login/user">User</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/login/admin">Admin</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/policelogin">Police</NavDropdown.Item>
                                </NavDropdown>
                            
                        </Nav>
                        
                    </div>
                </Container>
            </Navbar>
        
        </>
    );
}

export default NavBar;
