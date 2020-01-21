import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector,connect } from 'react-redux';
import { Link } from 'react-router-dom';
class CartButton extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:'',
      cart: ''
    }
  }
  render(){
    const cart=this.props.cart;
    if (cart.itms.length>0){
      return <Link className="nav-link" to='/cart'>Cart {cart.itms.length}</Link>
    }
    return <></>
  }
}
CartButton.propTypes={
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth,
  cart: state.cart
})
export default connect(mapStateToProps)(CartButton)