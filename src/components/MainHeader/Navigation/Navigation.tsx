import React from 'react';

import styles from './Navigation.module.css';

type Props = {
  isLoggedIn: boolean;
  onLogout: () => void;
}
const Navigation = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
