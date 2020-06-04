import React, { Fragment } from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <div>toolbar, sidebar, backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
