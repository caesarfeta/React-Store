import axios from "axios";
import {
  GET_ERRORS
} from "./types";
const PROXY = require('../../package.json').proxy;
export const addToCart=itm=>{
  return{
    type: 'ADD_TO_CART',
    payload: itm
  }
}
export const rmFromCart=itm=>{
  return{
    type: 'RM_FROM_CART',
    payload: itm
  }
}
export const itmN=itm=>{
  return{
    type: 'ITM_N',
    payload: itm
  }
}
export const itmNValid=itm=>{
  return{
    type: 'ITM_N_VALID',
    payload: itm
  }
}
export const buy=(cart,history)=>dispatch=>{
  axios.post(PROXY+"/cart/buy",cart)
    .then(res=>history.push("/purchased"))
    .catch(err=>
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      })
    )
}