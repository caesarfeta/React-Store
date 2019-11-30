import counterReducer from './counter';
import loggedReducer from './isLogged';
import productReducer from './products';
import cartReducer from './cart';
import {combineReducers} from 'redux';
const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
  products: productReducer,
  cart: cartReducer
})
export default allReducers