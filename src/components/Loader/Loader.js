import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const LoaderPage = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        timeout={3000}
        height={100}
        width={100}
      />
    </div>
  );
};

export default LoaderPage;
