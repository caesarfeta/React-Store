import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import {
  connect
} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart
} from 'react-icons/fa';
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
      return <>
      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip
            id="tooltip-cart">
            Cart
          </Tooltip>
        }>
      <Link className="nav-link" to='/cart'>
        <FaShoppingCart/><span className="counter nudge">{cart.count}</span>
      </Link>
      </OverlayTrigger>
      </>
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