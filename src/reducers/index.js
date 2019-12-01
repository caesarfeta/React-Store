import productReducer from './products';
import cartReducer from './cart';
import {combineReducers} from 'redux';
const allReducers = combineReducers({
  products: productReducer,
  cart: cartReducer
})
export default allReducers