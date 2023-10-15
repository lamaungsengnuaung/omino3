import classes from './HeaderCartBtn.module.css';
import CartIcon from '../Cart/CartIcon';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartBtn = (props) => {
  const cartContext = useContext(CartContext);
  // console.log(cartContext);
  const numOfCartItems = cartContext.items.reduce(
    (curVal, item) => curVal + item.amount,
    0,
  );
  const [headerBtnHightLight, setHeaderBtnHightLight] = useState(false);
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setHeaderBtnHightLight(true);
    const timer = setTimeout(() => {
      setHeaderBtnHightLight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  const BtnClass = `${classes.button} ${
    headerBtnHightLight ? classes.bump : ''
  }`;

  return (
    <button className={[BtnClass]} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>Your Cart</span>
      <span className={classes.badge}> {numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
