import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Private from './Private.comp';
import Public from './Public.comp';
import Logout from './Logout.comp';
import CartButton from './CartButton.comp';
import { Link } from 'react-router-dom';
export default class LANav extends Component{
  render(){
    return (
      <Navbar sticky="top" bg="primary">
        <Link className="navbar-brand" to="/">LAPLASTX</Link>
        <Nav>
          <Public><Link className="nav-link" to="/register">Register</Link></Public>
          <Public><Link className="nav-link" to="/login">Login</Link></Public>
          <Private><Link className="nav-link" to="/purchased">Purchased</Link></Private>
          <Link className="nav-link" to="/shop">Shop</Link>
        </Nav>
        <Nav className="ml-auto">
          <CartButton/>
          <Logout/>
        </Nav>
      </Navbar>
    )
  }
}