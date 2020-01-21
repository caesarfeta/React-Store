import {combineReducers} from 'redux';
import authReducer from './auth';
import errorReducer from './error';
import productReducer from './products';
import cartReducer from './cart';
export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  products: productReducer,
  cart: cartReducer
})