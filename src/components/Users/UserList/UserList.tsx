import React from 'react';
import { User } from '../../../types/user.type';
import Card from '../../UI/Card';
import styles from './UserList.module.css';

type Props = {
  users: User[];
};
const UserList = (props: Props) => {
  return props.users.length !== 0 ? (
    <Card className={styles.users}>
      <ul>
        {props.users?.map((user, index) => (
          <li key={index}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  ) : null;
};

export default UserList;
