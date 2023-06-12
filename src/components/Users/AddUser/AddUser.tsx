import React, { FormEvent, useRef, useState } from 'react';
import { User } from '../../../types/user.type';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../UI/ErrorModal';
import styles from './AddUser.module.css';

type Props = {
  onUserAddHandler: (user: User) => void;
};
const AddUser = (props: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const addUserHandler = (event: FormEvent) => {
    event.preventDefault();
    const userName = nameInputRef.current?.value;
    const age = ageInputRef.current?.value;
    if (userName?.trim().length === 0 || age?.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (age && +age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    } else if (userName && age) {
      props.onUserAddHandler({ userName, age: Number(age) });
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  const [error, setError] = useState<null | { title: string; message: string }>();
  const hideErrorMessage = () => setError(null);
  return (
    <>
      {error && <ErrorModal {...error} onConfirm={hideErrorMessage} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
