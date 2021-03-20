import React, { Component } from 'react'
import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/home">Cupuama App - React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <NavDropdown title="Manage" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/fruits">Fruits</NavDropdown.Item>
                            <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="orders">Orders</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-4" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav.Item>
                        <Nav.Link href="#home" disabled>&nbsp;</Nav.Link>
                    </Nav.Item>
                    <Navbar.Text><a href="#login">Mark Otto</a></Navbar.Text>
                    <Nav.Link href="#link">Logout</Nav.Link>
                </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header