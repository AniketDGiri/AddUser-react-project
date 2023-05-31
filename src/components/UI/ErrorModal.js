import Button from "./Button";
import Card from "./Card";
import ErrorModalStyle from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={ErrorModalStyle.backdrop} onClick={props.onConfirm}></div>
      <Card addUserStyle={ErrorModalStyle.modal}>
        <header className={ErrorModalStyle.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={ErrorModalStyle.content}>
          <p>{props.message}</p>
        </div>
        <footer className={ErrorModalStyle.actions}>
          <Button onClick={props.onConfirm}>{props.buttonTitle}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
