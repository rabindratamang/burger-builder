import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Fragment>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuidControls />
        </div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
