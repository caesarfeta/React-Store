import './App.css';
import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import _ from 'lodash';
import {FaTimesCircle,FaTimes,FaPlus,FaShoppingCart} from 'react-icons/fa';
import {addToCart,rmFromCart,itmN,itmNValid} from './actions';
function Product(p){
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const cartItm = _.find(cart.itms, function(o){ return o[0]===p.itm });
  const disable = !!cartItm && cartItm[0].max_quant != null && cartItm[1] >= cartItm[0].max_quant;
  return <tr key={ p.itm.id }>
    <td>{ p.itm.name }</td>
    <td className={ p.itm.sale_price!=null?"strike":"" }>${ p.itm.price }</td>
    <td>{ !!p.itm.sale_price?"$"+p.itm.sale_price:"" || "None" }</td>
    <td>{ p.itm.max_quant || "None" }</td>
    <td>
      <button disabled={ disable } onClick={()=>dispatch(addToCart(p.itm))}>Buy <FaShoppingCart /></button>
    </td>
  </tr>
}
function CartItem(p){
  const dispatch = useDispatch();
  return <tr>
    <td>{ p.itm[0].name }</td>
    <td className="ar">
      ${ p.itm[0].cart_price }
      <FaTimes className="math"/>
      <input type="number"
              min="1"
              max={p.itm[0].max_quant}
              value={p.itm[1]}
              onChange={e=>dispatch(itmN([p.itm,e.target.value]))}
              onBlur={e=>dispatch(itmNValid([p.itm,e.target.value]))}
        />
    </td>
    <td><FaTimesCircle className="math red" onClick={()=>dispatch(rmFromCart(p.itm))}/></td>
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
    <table>
      <tbody>
      <tr><td className="ar">Subtotal</td><td>${(cart.subtotal).toFixed(2)}</td></tr>
      <tr><td className="ar">Tax @ {(cart.taxrate*100).toFixed(1)+"%"}</td>
        <td><FaPlus className="math"/>${(cart.tax).toFixed(2)}</td>
      </tr>
      <tr><td className="ar">Total</td><td className="bold">${(cart.total).toFixed(2)}</td></tr>
      </tbody>
    </table>
  </div>
}
function List(){
  const products = useSelector(state=>state.products)
  var trs = _.map(products,function(itm){
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
function App() {
  return (
    <div id="app" className="App">
        <List />
        <Cart />
    </div>
  );
}
export default App;