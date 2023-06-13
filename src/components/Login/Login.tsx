import React, { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';

import { Card } from '../UI/Card';
import styles from './Login.module.css';
import { Button } from '../UI/Button';

const emailReducer = (
  state: { value: string; isValid: boolean },
  action: {
    type: string;
    value?: string | boolean;
  },
) => {
  if (action.type === 'USER_INPUT' && typeof action.value === 'string') {
    return { value: action.value, isValid: action.value.includes('@') };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  } else {
    return { value: '', isValid: false };
  }
};
const passwordReducer = (
  state: { value: string; isValid: boolean },
  action: {
    type: string;
    value?: string | boolean;
  },
) => {
  if (action.type === 'USER_INPUT' && typeof action.value === 'string') {
    return { value: action.value, isValid: action.value.length > 6 };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.length > 6 };
  } else {
    return { value: '', isValid: false };
  }
};

type Props = {
  onLogin: (email: string, password: string) => void;
};
const Login = (props: Props) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target?.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value });

    setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.control} ${emailState?.isValid === false ? styles.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${styles.control} ${passwordState.isValid === false ? styles.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
