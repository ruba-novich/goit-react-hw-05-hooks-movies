import { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="preloader__row">
          <div className="preloader__item"></div>
          <div className="preloader__item"></div>
        </div>
      </div>
    );
  }
}
