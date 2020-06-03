import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button disabled={props.disabled} onClick={props.removeIngredient}>
      Less
    </button>
    <button onClick={props.addIngredient}>More</button>
  </div>
);

export default buildControl;
