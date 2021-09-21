import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.Navigation}>
      <li className={styles.NavigationList}>
        <NavLink exact to={routes.home} className={styles.NavigationItem}>
          Home
        </NavLink>
      </li>
      <li className={styles.NavigationList}>
        <NavLink to={routes.movies} className={styles.NavigationItem}>
          Search movies
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
