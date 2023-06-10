import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { User } from './types/user.type';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const onUserAddHandler = (user: User) => {
    setUsers((userList) => [user, ...userList]);
  };

  return (
    <div>
      <AddUser onUserAddHandler={onUserAddHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
