import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
  const { id: id } = props;

  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();
  //eventHandler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmountNum === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    event.target[0].value = 1;
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputAmountRef}
        input={{
          type: 'number',
          id: id,
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        label='Amount'
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Error Reset The Order Amount</p>}
    </form>
  );
};

export default MealItemForm;
