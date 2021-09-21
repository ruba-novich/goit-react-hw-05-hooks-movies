import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from '../../routes';

import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  renderBackUrl = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    return (
      <button
        className={styles.Button}
        variant="contained"
        onClick={this.renderBackUrl}
      >
        Back
      </button>
    );
  }
}

export default withRouter(Button);
