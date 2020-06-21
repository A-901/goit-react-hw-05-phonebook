import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideErrTransition from "../../transitions/slideErr.module.css";

import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
    err: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const number = evt.target.number.value;
    const contacts = this.props.contacts;

    const includeContacts = contacts.find(
      contact => contact.name === this.state.name
    );

    const createNewContact = {
      id: uuidv4(),
      name: name,
      number: number
    };
    if (name === "" || number === "") {
      return;
    }
    if (includeContacts) {
      this.showErrorMessage();
    } else {
      this.props.addContact(createNewContact);
      this.setState({ name: "", number: "" });
    }
  };
  showErrorMessage = () => {
    this.setState({
      err: true,
    });
    setTimeout(() => {
      this.setState({ err: false });
    }, 2500);
  };

  render() {
    const { name, number, err } = this.state;
    return (
      <div>
        <TransitionGroup>
          {err && (
            <CSSTransition timeout={250} classNames={slideErrTransition}>
              <ErrorMessage name={name} />
            </CSSTransition>
          )}
        </TransitionGroup>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              placeholder="Enter number in format 123-45-67"
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};

export default ContactForm;