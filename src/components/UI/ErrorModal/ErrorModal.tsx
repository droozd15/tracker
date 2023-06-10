import React, { MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

type Props = {
  title: string;
  message: string;
  onConfirm: (event: MouseEvent) => void;
};

const Backdrop = ({ onConfirm }: { onConfirm: (event: MouseEvent) => void }) => (
  <div className={styles.backdrop} onClick={onConfirm} />
);

const ModalOverlay = (props: Props) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
);

const ErrorModal = (props: Props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, document.getElementById('overlay-root') as HTMLElement)}
    </React.Fragment>
  );
};

export default ErrorModal;
