import _ from 'lodash';
function calcRest( state ){
  state.subtotal=_.sum( _.map(state.itms,
    function(o){ return o[0].cart_price*o[1] }
  ));
  state.tax=state.subtotal*state.taxrate;
  state.total=state.subtotal+state.tax;
}
const cartReducer = (state={
    itms:[],
    subtotal: 0,
    tax: 0,
    taxrate:.072,
    total: 0
  },action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      // update item count
      var itm = _.find( state.itms, function(o){
        return o[0]===action.payload
      })
      if ( !!itm ){
        itm[1]++
      }
      else {
        state.itms.push([action.payload,1])
      }
      calcRest( state )
      return _.clone( state )
    case 'RM_FROM_CART':
      if (action.payload[1]===1){
        _.remove(state.itms,function(o){
          return o===action.payload
        })
      }
      else {
        action.payload[1]--
      }
      calcRest( state )
      return _.clone( state )
    default:
      return state
  }
};
export default cartReducer