import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCxt = useContext(CartContext);
  const CartItemAddHandler = (item) => {
    cartCxt.addItem(item);
  };
  const CartItemRemoveHandler = (item) => {
    // console.log(item);
    cartCxt.removeItem(item);
  };
  const cartItem = (
    <ul className={classes['cart-items']}>
      {cartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={CartItemAddHandler.bind(null, item)}
          onRemove={CartItemRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const totalPrice = cartCxt.totalPrice;
  const hasItem = cartCxt.items.length > 0;

  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
