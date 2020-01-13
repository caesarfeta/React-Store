import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector,useDispatch} from 'react-redux';
import _ from 'lodash';
import {FaTimesCircle,FaTimes,FaPlus,FaShoppingCart,FaCartPlus} from 'react-icons/fa';
import {addToCart,rmFromCart,itmN,itmNValid} from './actions';
import { Container, Row, Col, Jumbotron, Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Product(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <tr key={ p.itm.id }>
    <td>{ p.itm.name }</td>
    <td className={ p.itm.sale_price!=null?"strike":"" }>${ p.itm.price }</td>
    <td className={ p.itm.sale_price === null ? "fade":"" }>{ !!p.itm.sale_price?"$"+p.itm.sale_price:"" || "None" }</td>
    <td className={ p.itm.max_quant === null ? "fade":"" }>{ p.itm.max_quant || "None" }</td>
    <td>
      <button disabled={ disable } onClick={()=>dispatch(addToCart(p.itm))}>Add <FaCartPlus /></button>
    </td>
  </tr>
}
function CartItem(p){
  const dispatch = useDispatch();
  return <tr>
    <td className="ar">
      { p.itm[0].name }
      <FaTimes className="fade"/>
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
      <FaTimesCircle className="fade red" onClick={()=>dispatch(rmFromCart(p.itm))}/>
    </td>
  </tr>
}
function Cart(){
  const cart = useSelector(state=>state.cart)
  var itms = _.map(cart.itms,function(itm,i){
    return <CartItem itm={itm} key={i}/>
  })
  return <div id="cart" className={itms.length>0?"":"hidden"}>
    <h3><FaShoppingCart />Cart</h3>
    <table>
      <tbody>{ itms }</tbody>
    </table>
    <hr />
    <table className="fr">
      <tbody>
      <tr><td className="ar">Subtotal</td><td className="ar">${(cart.subtotal).toFixed(2)}</td></tr>
      <tr><td className="ar">Tax @ {(cart.taxrate*100).toFixed(1)+"%"}</td>
        <td className="ar"><FaPlus className="fade"/>${(cart.tax).toFixed(2)}</td>
      </tr>
      <tr><td className="ar">Total</td><td className="bold ar">${(cart.total).toFixed(2)}</td></tr>
      </tbody>
    </table>
  </div>
}
function List(){
  const prods = useSelector(state=>state.products)
  const trs = _.map(prods,function(itm){
    return <Product itm={itm} key={itm.id}/>
  })
  return <div id="list">
    <h3>Products</h3>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th>Max Quantity</th>
        </tr>
    </thead>
    <tbody>{ trs }</tbody>
    </table>
  </div>
}
function Header(){
  const about="Welcome to LAPLASTX! We are your source for inspired 3D printable figures and toys! Check out our latest offerings below!"
  return <Alert variant="primary">
    <h1>LAPLASTX</h1>
    <ReactMarkdown source={about} />
  </Alert>
}
function Prod(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <Jumbotron>
    <Row>
      <Col><img src={p.itm.logo}/></Col>
    </Row>
    <Row>
      <Col><img src={p.itm.splash}/></Col>
    </Row>
    <Row>
      <Col>
        <ReactMarkdown source={p.itm.copy} />
        <button disabled={ disable } onClick={()=>dispatch(addToCart(p.itm))}>Add <FaCartPlus /></button>
      </Col>
      <Col><img className="fig" src={p.itm.figure}/></Col>
    </Row>
  </Jumbotron>
}
function Browse(){
  const prods = _.map( useSelector(state=>state.products),function(itm){
    return <Prod itm={itm} key={itm.id}/>
  })
  return <Container>{prods}</Container>
}
function App() {
  return (
    <div id="app" className="App">
        <Header />
        <Browse />
        <Cart />
    </div>
  );
}
export default App;