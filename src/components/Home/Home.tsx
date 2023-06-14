import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';

import styles from './Home.module.css';

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
