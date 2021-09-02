import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }
  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  hendelBecdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.hendelBecdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
export default Modal;
