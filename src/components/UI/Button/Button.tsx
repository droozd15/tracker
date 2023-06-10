import React, {PropsWithChildren, MouseEvent} from 'react';
import styles from './Button.module.css';

type Props= PropsWithChildren &{
  type: 'button' | 'submit' | 'reset';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button =(props: Props) => {
  return (
    <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
