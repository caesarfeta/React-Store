import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
export default class LANav extends Component{
  render(){
    return (
      <Navbar bg="primary">
        <Navbar.Brand href="/">LAPLASTX</Navbar.Brand>
        <Nav>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/users">List Users</Nav.Link>
          <Nav.Link href="/users">List Products</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}