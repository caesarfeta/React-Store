import './App.css';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector,useDispatch} from 'react-redux';
import _ from 'lodash';
import {FaTimesCircle,FaTimes,FaPlus,FaShoppingCart,FaCartPlus} from 'react-icons/fa';
import {addToCart,rmFromCart,itmN,itmNValid} from './actions';
import { Container, Row, Col, Jumbotron, Alert, Button, Modal, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Header(){
  const about="## The SOURCE for STRANGE & BEAUTIFUL \n\n## 3D-printable FIGURES & TOYS!";
  return <>
  <Container>
    <h1>LAPLASTX</h1>
    <ReactMarkdown source={about} />
  </Container>
  </>
}
function Browse(){
  const prods = _.map( useSelector(state=>state.products),function(itm){
    return <Prod itm={itm} key={itm.id}/>
  })
  return <Container>{prods}</Container>
}
function Prod(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <>
  <Jumbotron>
    <Row>
      <Col><img src={p.itm.logo}/></Col>
    </Row>
    <Row>
      <Col><img src={p.itm.splash}/></Col>
    </Row>
    <Row>
      <Col>
        <ReactMarkdown source={p.itm.copy} />
        <span className={ p.itm.sale_price!=null?"strike":"" }>${ p.itm.price }</span>
        <span className={ p.itm.sale_price === null ? "fade":"" }>{ !!p.itm.sale_price?"$"+p.itm.sale_price:"" || "None" }</span>
        <Button 
          disabled={ disable }
          onClick={()=>dispatch(addToCart(p.itm))}>
            Add <FaCartPlus />
        </Button>
      </Col>
      <Col><img className="fig" src={p.itm.figure}/></Col>
    </Row>
    <Row>
      <Col>Designer: {p.itm.designer} | Released: {p.itm.released}</Col>
    </Row>
  </Jumbotron>
  </>
}
function Nav(){
  const cart = useSelector(state=>state.cart)
  return <>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>LAPLASTX</Navbar.Brand>
    <Cart/>
  </Navbar>
  </>
}

function Cart(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useSelector(state=>state.cart)
  var itms = _.map(cart.itms,function(itm,i){
    return <CartItem itm={itm} key={i}/>
  })
  return <>
  <Button
    size="lg"
    className="float-sm-right"
    onClick={handleShow}>
      <FaShoppingCart />
      <span>{ cart.itms.length || null }</span>
  </Button>
  <Modal id="cart" show={show} centered>
  <Modal.Header>
    <Modal.Title><FaShoppingCart />Cart</Modal.Title>
  </Modal.Header>
  <Modal.Body>
      <table>
        <tbody>{ itms }</tbody>
      </table>
      <hr />
      <table className="fr">
        <tbody>
        <tr>
          <td className="ar">Subtotal</td>
          <td className="ar">${(cart.subtotal).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="ar">Tax @ {(cart.taxrate*100).toFixed(1)+"%"}</td>
          <td className="ar"><FaPlus className="fade"/>${(cart.tax).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="ar">Total</td><td className="bold ar">${(cart.total).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
    </Modal.Body>
    <Button 
          variant="light"
          onClick={handleClose}>
          Close
    </Button>
    <Button>
          Checkout
    </Button>
  </Modal>
  </>
}
function CartItem(p){
  const dispatch = useDispatch();
  return <tr>
    <td className="ar">
      { p.itm[0].name }
      <FaTimes/>
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
function Footer(){
  return <>
    <div> &#169; { new Date().getFullYear() } LAPLASTX </div>
  </>
}
function App() {
  return (
    <div id="app" className="App">
        <Nav />
        <Header />
        <Browse />
        <Footer />
    </div>
  );
}
export default App;