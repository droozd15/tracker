import React, {PropsWithChildren} from 'react';
import styles from './Card.module.css';

type Props = PropsWithChildren & {
  className: string;
};

export const Card = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

