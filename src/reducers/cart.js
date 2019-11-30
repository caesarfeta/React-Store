import _ from 'lodash';
const cartReducer = (state=[],action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      console.log(action.payload)
      return state
    default:
      return state
  }
};
export default cartReducer