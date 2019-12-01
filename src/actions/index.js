export const increment = () => {
  return{
    type: 'INCREMENT'
  }
}
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
export const addToList = itm => {
  return{
    type: 'ADD_TO_LIST',
    payload: itm
  }
}