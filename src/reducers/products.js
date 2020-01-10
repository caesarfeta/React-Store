import _ from 'lodash';
const productReducer = (state= _.map(
    [
      [ 
        'Richie Rotchild',
        19.99,
        null,
        null,
        'img/cupie.png',
        'img/cupie.png',
        '# This is a header\n\nAnd this is a paragraph'
      ],
      [ 
        'Queenie B',
        29.99,
        19.99,
        null,
        'img/chaddie_brown.jpg',
        'img/chaddie_brown.jpg',
        '# This is a header\n\nAnd this is a paragraph'
        ]
    ], 
    function( itm, i ){
      const cart_price = (itm[2]!=null)?itm[2]:itm[1]
      return {
        id: i, // for simplicity's sake
        name:itm[0],
        price:itm[1],
        sale_price:itm[2],
        max_quant:itm[3],
        cart_price: cart_price,
        thumb:itm[4],
        copy:itm[6]
      }
    }
  ),action) => {
  switch(action.type){
    default:
      return state
  }
};
export default productReducer