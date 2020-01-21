import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Private from './Private.comp';
import Public from './Public.comp';
import Logout from './Logout.comp';
import Cart from './Cart.comp';
export default class LANav extends Component{
  render(){
    return (
      <Navbar bg="primary">
        <Navbar.Brand href="/">LAPLASTX</Navbar.Brand>
        <Nav>
          <Public><Nav.Link href="/register">Register</Nav.Link></Public>
          <Public><Nav.Link href="/login">Login</Nav.Link></Public>
          <Private><Nav.Link href="/purchased">Purchased</Nav.Link></Private>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Cart/>
          <Logout/>
        </Nav>
      </Navbar>
    )
  }
}