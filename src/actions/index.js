export const GET_ERRORS="GET_ERRORS";
export const USER_LOADING="USER_LOADING";
export const SET_CURRENT_USER="SET_CURRENT_USER";
export const addToCart = itm => {
  return{
    type: 'ADD_TO_CART',
    payload: itm
  }
}
export const rmFromCart = itm => {
  return{
    type: 'RM_FROM_CART',
    payload: itm
  }
}
export const itmN = itm => {
  return{
    type: 'ITM_N',
    payload: itm
  }
}
export const itmNValid = itm => {
  return{
    type: 'ITM_N_VALID',
    payload: itm
  }
}