import productReducer from './products';
import cartReducer from './cart';
import authReducer from './auth';
import errorReducer from './error';
import {combineReducers} from 'redux';
const allReducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  error: errorReducer
})
export default allReducers