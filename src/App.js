import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector,useDispatch} from 'react-redux';
import _ from 'lodash';
import {FaTimesCircle,FaTimes,FaPlus,FaShoppingCart,FaCartPlus} from 'react-icons/fa';
import {addToCart,rmFromCart,itmN,itmNValid} from './actions';
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
  return <h1>LAPLASTX</h1>
}
function Prod(p){
  return <div className="prod">
    <h2>{p.itm.name}</h2>
    <img src={p.itm.thumb}/>
    <ReactMarkdown source={p.itm.copy} />
  </div>
}
function Browse(){
  const prods = _.map( useSelector(state=>state.products),function(itm){
    return <Prod itm={itm} key={itm.id}/>
  })
  return prods
}
function App() {
  return (
    <div id="app" className="App">
        <Header />
        <Browse />
        <List />
        <Cart />
    </div>
  );
}
export default App;