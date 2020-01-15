import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class LANav extends Component{
  render(){
    return (
      <Navbar bg="primary">
        <Navbar.Brand href="/">LAPLASTX</Navbar.Brand>
        <Nav>
          <Nav.Link href="/user">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/shop">Checkout</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}