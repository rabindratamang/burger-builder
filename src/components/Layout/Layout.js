import React, { Fragment } from 'react';
import classes from './Layout.css';

const layout = props => {
  return (
    <Fragment>
      <div>toolbar, sidebar, backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
