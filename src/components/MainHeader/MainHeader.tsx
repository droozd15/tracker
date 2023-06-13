import React from 'react';

import Navigation from './Navigation';
import styles from './MainHeader.module.css';

type Props = {
  isAuthenticated: boolean;
  onLogout: () => void;
};
const MainHeader = (props: Props) => {
  return (
    <header className={styles['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
