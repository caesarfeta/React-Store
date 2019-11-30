import _ from 'lodash';
const cartReducer = (state=[],action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      var itm = _.find( state,function(o){
        return o[0]===action.payload.id
      })
      if ( !!itm ){
        itm[1]++
      }
      else {
        state.push([action.payload.id,1])
      }
      console.log( state );
      return state
    default:
      return state
  }
};
export default cartReducer