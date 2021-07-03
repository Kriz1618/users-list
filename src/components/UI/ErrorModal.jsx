import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClickError} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={style.content}>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onClickError}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickError={props.onClickError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClickError={props.onClickError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
