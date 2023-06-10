import React, { ChangeEvent, FormEvent, useState } from 'react';
import { User } from '../../../types/user.type';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import styles from './AddUser.module.css';

type Props = {
  onUserAddHandler: (user: User) => void;
};
const AddUser = (props: Props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event: FormEvent) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    } else {
      props.onUserAddHandler({ userName, age: Number(age) });

      setUserName('');
      setAge('');
    }
  };

  const userNameChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const ageChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const [error, setError] = useState<null | { title: string; message: string }>();
  const hideErrorMessage = () => setError(null);
  return (
    <>
      {error && <ErrorModal {...error} onConfirm={hideErrorMessage} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={userName} onChange={userNameChangedHandler} />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageChangedHandler} />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
