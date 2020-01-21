import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import _ from 'lodash';
import {FaCartPlus} from 'react-icons/fa';
import {
  addToCart
} from '../actions';
import {
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';
function Prod(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <>
  <Jumbotron>
    <Row>
      <Col><img alt="logo" src={p.itm.logo}/></Col>
    </Row>
    <Row>
      <Col><img alt="splash" src={p.itm.splash}/></Col>
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
      <Col><img alt="figure" className="fig" src={p.itm.figure}/></Col>
    </Row>
    <Row>
      <Col>Designer: {p.itm.designer} | Released: {p.itm.released}</Col>
    </Row>
  </Jumbotron>
  </>
}
class Shop extends Component{
  constructor(props){
    super(props);
    this.state={
      auth:'',
      cart:'',
      products:''
    }
  }
  render(){
    const prods = _.map(this.props.products,function(itm){
      return <Prod itm={itm} key={itm.id}/>
    })
    return <>{prods}</>
  }
}
Shop.propTypes={
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}
const mapStateToProps=state=>({
  auth: state.auth,
  cart: state.cart,
  products: state.products
})
export default connect(mapStateToProps)(Shop)