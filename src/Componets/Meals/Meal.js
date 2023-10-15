import React, { Fragment } from 'react';
import AvaliableMeals from './AvaliableMeals';
import MealsSummary from './MealsSummary';

const Meal = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
};
export default Meal;
