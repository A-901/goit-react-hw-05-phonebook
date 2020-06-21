import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ name }) => {
  return (
    <div className={styles.errorMessageContainer}>
      <p className={styles.errorMessageText}>Contact allready exist!</p>
    </div>
  );
};

export default ErrorMessage;
