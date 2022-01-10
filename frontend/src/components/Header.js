import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Nav,Navbar,Container} from 'react-bootstrap'
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">GetIt</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart">cart</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
