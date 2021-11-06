import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { getAllPhonebookContacts } from "../../redux/phonebook/phonebook-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operations";

import st from "./ContactForm.module.css";

const ContactForm = () => {
  const initialState = {
    name: "",
    number: "",
  };
  const [contact, setContact] = useState(initialState);
  const dispatch = useDispatch();
  const onSubmit = (contact) => dispatch(addContact(contact));

  const idInputName = uuidv4();
  const idInputNumber = uuidv4();
  const allContacts = useSelector((state) => getAllPhonebookContacts(state));

  const reset = () => {
    setContact({ name: "", number: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const addNoRepeatContact = (cont, contacts) => {
    const { name, number } = cont;
    if (
      contacts.some(
        (contacts) => contacts.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    onSubmit(cont);
    reset();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addNoRepeatContact(contact, allContacts);
    reset();
  };

  return (
    <form onSubmit={handleSubmitForm} className={st.form_contact}>
      <label htmlFor={idInputName} className={st.label}>
        Name
        <input
          type="text"
          id={idInputName}
          onChange={handleChange}
          value={contact.name}
          className={st.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={idInputNumber} className={st.label}>
        Number
        <input
          type="tel"
          id={idInputNumber}
          onChange={handleChange}
          value={contact.number}
          className={st.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={st.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
