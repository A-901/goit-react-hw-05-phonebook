import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <span className={styles.name}>{name}:</span>
      <span className={styles.number}>{number}</span>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Delet contact
      </button>
    </>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
export default ContactListItem;