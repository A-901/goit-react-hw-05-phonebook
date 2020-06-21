import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideTransition from "../../transitions/slide.module.css";

import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
  {contacts.map((contact) => {
    return (
      <CSSTransition
        key={contact.id}
        timeout={250}
        classNames={slideTransition}
      >
        <li className={styles.item}>
          <ContactListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      </CSSTransition>
    );
  })}
</TransitionGroup>
  );

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;