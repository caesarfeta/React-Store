import _ from 'lodash';
const productReducer = (state= _.map(
    [
      [ 'Basketball', 16.99, null, null],
      [ 'Baseball', 6.49, 5.99, null],
      [ 'Football', 20.00, 10.00, 4],
      [ 'Basketball 2', 16.99, 12.99, 1],
      [ 'Lacrosse Stick', 39.99, null, null]
    ], 
    function( itm, i ){
      return {
        id: i, // for simplicity's sake
        name:itm[0],
        price:itm[1],
        sale_price:itm[2],
        max_quant:itm[3],
        cart_price: function(n){
          return n*(itm[2]!=null)?itm[2]:itm[1]
        }
      }
    }
  ),action) => {
  switch(action.type){
    default:
      return state
  }
};
export default productReducer