import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, type }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
