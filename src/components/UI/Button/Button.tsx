import React, { PropsWithChildren, MouseEvent } from 'react';

import styles from './Button.module.css';
type Props = PropsWithChildren & {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};
export const Button = (props: Props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
