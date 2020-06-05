import React, { Fragment, Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal;
  }

  render() {
    return (
      <Fragment>
        <Backdrop
          show={this.props.showModal}
          clicked={this.props.modalClosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.showModal
              ? 'translateY(0)'
              : 'translateY(-100vh)',
            opacity: this.props.showModal ? '1' : '0',
          }}
        >
          {this.props.showModal ? this.props.children : null}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
