import { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalPrice: 0,
};
const cartReducer = (state, action) => {
  let updatedItem;
  let updatedItems;
  let updatedtotalPrice;
  const existItemIndex = state.items.findIndex(
    (item) => item.id === action.item.id,
  );
  const alreadyExistItem = state.items[existItemIndex];

  const DecreaseAmountFnc = () => {
    updatedItem = {
      ...alreadyExistItem,
      amount: alreadyExistItem.amount--,
    };
    updatedItems = [...state.items];
    updatedItems[existItemIndex] = updatedItem;
  };
  const IncreaseAmountFnc = () => {
    updatedItem = {
      ...alreadyExistItem,
      amount: alreadyExistItem.amount++,
    };
    updatedItems = [...state.items];
    updatedItems[existItemIndex] = updatedItem;
  };

  if (action.type === 'ADD') {
    if (alreadyExistItem) {
      IncreaseAmountFnc();
    } else {
      updatedItem = action.item;
      updatedItems = state.items.concat(updatedItem);
    }
    updatedtotalPrice = updatedItems.reduce((accr, { price, amount }) => {
      return accr + price * amount;
    }, 0);

    return { items: updatedItems, totalPrice: updatedtotalPrice };
  }
  if (action.type === 'REMOVE') {
    if (alreadyExistItem.amount > 0) {
      DecreaseAmountFnc();
      console.log(updatedItem.amount);
    } else {
      updatedItems = [...state.items].filter(({ amount }) => amount != 0);
    }
    updatedtotalPrice = updatedItems.reduce((accr, { price, amount }) => {
      return accr + price * amount;
    }, 0);
    return { items: updatedItems, totalPrice: updatedtotalPrice };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemToCartHandler = (item) => {
    dispatchCartState({
      type: 'REMOVE',
      item: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
