import classes from './CartItem.module.css';

const CartItem = (prop) => {
  const price = `$${prop.price.toFixed(2)}`;
  return (
    <li className={classes['cart-item']}>
      <h2>{prop.name} </h2>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>× {prop.amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={prop.onRemove}>-</button>
        <button onClick={prop.onAdd}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
