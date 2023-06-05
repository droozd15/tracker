import React from "react";
import cn from 'classnames';
import './Card.css';

const Card = (props: { children: React.ReactNode, className: string }) => {
  return <div className={cn('card', props.className)}>{props.children}</div>;
}

export default Card;
