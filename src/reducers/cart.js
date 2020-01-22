import _ from 'lodash';
function calcRest( state ){
  state.subtotal=_.sum( _.map(state.itms,
    function(o){ return o[0].cart_price*o[1] }
  ));
  state.tax=state.subtotal*state.taxrate;
  state.total=state.subtotal+state.tax;
  state.count=_.sum( _.map(state.itms,
    function(o){ return Number(o[1]) }
  ));
}
const cartReducer = (state={
    itms:[],
    subtotal: 0,
    tax: 0,
    taxrate:.072,
    total: 0,
    count: 0,
    visible:false
  },action) => {
  switch (action.type){
    case 'ADD_TO_CART':
      var itm = _.find( state.itms, function(o){
        return o[0]===action.payload
      })
      if (!!itm){
        if (itm[1]<action.payload.max_quant||action.payload.max_quant==null){
          itm[1]++
        }
      }
      else {
        state.itms.push([action.payload,1])
      }
      calcRest( state )
      return _.clone( state )
    case 'RM_FROM_CART':
      _.remove(state.itms,function(o){
        return o===action.payload
      })
      calcRest( state )
      return _.clone( state )
    case "ITM_N":
      var cartItm = action.payload[0];
      var n = action.payload[1];
      cartItm[1]=n;
      calcRest( state )
      return _.clone( state )
    case "ITM_N_VALID":
      var max = action.payload[0][0].max_quant;
      if ( max != null && max < action.payload[1] ){
        action.payload[0][1] = max;
      }
      if ( action.payload[0][1]<1){
        action.payload[0][1] = 1;
      }
      calcRest( state )
      return _.clone( state )
    case "BUY":
      return state
    default:
      return state
  }
};
export default cartReducer