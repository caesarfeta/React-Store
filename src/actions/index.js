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