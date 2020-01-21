import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
class Cart extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:'',
      cart: ''
    }
  }
  onLogoutClick=e=>{
    e.preventDefault();
    this.props.logoutUser();
  };
  render(){
    const cart=this.props.cart;
    if (cart.itms.length>0){
      return <Nav.Link>Cart {cart.itms.length}</Nav.Link>
    }
    return <></>
  }
}
Cart.propTypes={
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth,
  cart: state.cart
})
export default connect(mapStateToProps)(Cart)