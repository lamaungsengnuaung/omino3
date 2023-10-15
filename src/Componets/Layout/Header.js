import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn.js';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OmniFood</h1>
        <div>
          <HeaderCartBtn onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A Table Full of Delicious Food' />
      </div>
    </Fragment>
  );
};

export default Header;
