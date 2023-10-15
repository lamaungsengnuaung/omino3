import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const xprice = `$ ${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{xprice} </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
