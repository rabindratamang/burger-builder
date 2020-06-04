import React, { Fragment } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Fragment>
    <Backdrop show={props.showModal} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.showModal ? '1' : '0',
      }}
    >
      {props.showModal ? props.children : null}
    </div>
  </Fragment>
);

export default modal;
