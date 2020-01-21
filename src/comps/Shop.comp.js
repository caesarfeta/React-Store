import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import _ from 'lodash';
import {FaCartPlus} from 'react-icons/fa';
import {
  addToCart,
  rmFromCart,
  itmN,
  itmNValid
} from '../actions';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Alert,
  Button,
  Modal,
  Navbar
} from 'react-bootstrap';
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
function Shop(){
  const prods = _.map( useSelector(state=>state.products),function(itm){
    return <Prod itm={itm} key={itm.id}/>
  })
  return <>{prods}</>
}
export default Shop;