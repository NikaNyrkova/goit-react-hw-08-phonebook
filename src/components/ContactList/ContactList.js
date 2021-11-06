import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/phonebook/phonebook-operations";
import { getVisibleContact } from "../../redux/phonebook/phonebook-selectors";

import st from "./ContactList.module.css";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={st.list}>
      <ContactListItem
        contacts={contacts}
        deleteContact={(id) => dispatch(deleteContact(id))}
      />
    </ul>
  );
};

export default ContactList;
