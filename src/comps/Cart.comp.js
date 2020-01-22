import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Button,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  rmFromCart,
  itmN,
  itmNValid,
  buy
} from '../actions';
import {
  FaTimesCircle,
  FaTimes,
  FaPlus
} from 'react-icons/fa';
function BuyButton(){
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart)
  const auth=useSelector(state=>state.auth)
  if (auth.isAuthenticated){
    return <Button size="lg" onClick={()=>dispatch(buy(cart))}>Buy</Button>
  }
  return <>
  <Button size="lg" disabled>Buy</Button>
  <span>You must login before buying!</span>
  </>
}
function CartItem(p){
  const dispatch=useDispatch();
  return <tr>
    <td className="ar">
      { p.itm[0].name }
      <FaTimes className="gray"/>
      <input type="number"
              min="1"
              max={p.itm[0].max_quant}
            value={p.itm[1]}
         onChange={e=>dispatch(itmN([p.itm,e.target.value]))}
           onBlur={e=>dispatch(itmNValid([p.itm,e.target.value]))}
        />
    </td>
    <td className="ar">
      ${(p.itm[0].cart_price*p.itm[1]).toFixed(2)}
    </td>
    <td>
      <FaTimesCircle className="red" onClick={()=>dispatch(rmFromCart(p.itm))}/>
    </td>
  </tr>
}
class Cart extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:'',
      cart:'',
      products:''
    }
  }
  render(){
    const cart=this.props.cart;
    var itms = _.map(cart.itms,function(itm,i){
      return <CartItem itm={itm} key={i}/>
    })
    return <div id="app">
    <div className="clearfix">
      {(cart.count===0) && <p>Nothing in cart!</p>}
      <table className="fr">
        <tbody>{ itms }</tbody>
      </table>
    </div>
    <hr/>
    <div className="clearfix">
      <table className="fr">
        <tbody>
        <tr>
          <td className="ar">Subtotal</td>
          <td className="ar">${(cart.subtotal).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="ar">Tax @ {(cart.taxrate*100).toFixed(1)+"%"}</td>
          <td className="ar"><FaPlus className="gray"/>${(cart.tax).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="ar">Total</td>
          <td className="bold ar">${(cart.total).toFixed(2)}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <Row>
      <Col>
        <BuyButton className="fr" />
      </Col>
    </Row>
    </div>
  }
}
Cart.propTypes={
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth,
  cart: state.cart,
  products: state.products
})
export default connect(mapStateToProps)(Cart)