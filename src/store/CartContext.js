import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => item,
  removeItem: (item) => item,
});

export default CartContext;
