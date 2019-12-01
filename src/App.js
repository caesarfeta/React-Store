import './App.css';
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import _ from 'lodash';
import {FaMinusSquare} from 'react-icons/fa';
import {addToCart,rmFromCart} from './actions';
function Product(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <tr key={ p.itm.id }>
    <td>{ p.itm.name }</td>
    <td className={ p.itm.sale_price!=null?"strike":"" }>${ p.itm.price }</td>
    <td>{ !!p.itm.sale_price?"$"+p.itm.sale_price:"" }</td>
    <td>{ p.itm.max_quant }</td>
    <td>
      <button disabled={ disable } onClick={()=>dispatch(addToCart(p.itm))}>Buy</button>
    </td>
  </tr>
}
function CartItem(p){
  const dispatch = useDispatch();
  return <tr>
    <td>{ p.itm[0].name }</td>
    <td>@${ p.itm[0].cart_price }</td>
    <td>x{ p.itm[1] }</td>
    <td><FaMinusSquare onClick={()=>dispatch(rmFromCart(p.itm))}/></td>
    <td>${(p.itm[0].cart_price*p.itm[1]).toFixed(2) }</td>
  </tr>
}
function Cart(){
  const cart = useSelector(state=>state.cart)
  var itms = _.map(cart.itms,function(itm,i){
    return <CartItem itm={itm} key={i}/>
  })
  return <div>
    <h1>Cart</h1>
    <table>
      <tbody>
      { itms }
      <tr><td>Subtotal:</td><td>${(cart.subtotal).toFixed(2)}</td></tr>
      <tr><td>Tax @ {(cart.taxrate*100).toFixed(1)+"%"}:</td><td>${(cart.tax).toFixed(2)}</td></tr>
      <tr><td>Total:</td><td>${(cart.total).toFixed(2)}</td></tr>
      </tbody>
    </table>
  </div>
}
function ListProducts(){
  const products = useSelector(state=>state.products)
  var trs = _.map(products,function(itm){
    return <Product itm={itm} key={itm.id}/>
  })
  return <div>
    <h1>Products</h1>
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
function AddProduct(){
  return <h1>AddProduct</h1>
}
function App() {
  return (
    <div className="App">
        <Cart />
        <ListProducts />
        <AddProduct />
    </div>
  );
}
export default App;