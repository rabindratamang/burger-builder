import React from 'react';
import BurgerIngredient from './BurgerIngredient /BurgerIngredient';
import classes from './Burger.css';
import burgerIngredient from './BurgerIngredient /BurgerIngredient';
import { array } from 'prop-types';

const burger = props => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((array, el) => {
      return array.concat(el);
    }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
