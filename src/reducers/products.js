import _ from 'lodash';
const productReducer = (state= _.map(
    [
      [ 
        'Alpha7',
        19.99,
        null,
        null,
        'alpha7/logo',
        'alpha7/splash',
        'alpha7/figure',
        '# Buy this figure! \n\n BAM! ZOW! BANG!\n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ]
    ], 
    function( itm, i ){
      const cart_price = (itm[2]!=null)?itm[2]:itm[1]
      function pre(i){ return 'img/'+i+'.png' }
      return {
        id: i, // for simplicity's sake
        name:itm[0],
        price:itm[1],
        sale_price:itm[2],
        max_quant:itm[3],
        cart_price: cart_price,
        logo:pre(itm[4]),
        splash:pre(itm[5]),
        figure:pre(itm[6]),
        copy:itm[7]
      }
    }
  ),action) => {
  switch(action.type){
    default:
      return state
  }
};
export default productReducer