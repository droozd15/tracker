import React, { useContext } from 'react';

import Login from './components/Login';
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import AuthContext from './store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
