import { createSelector } from "@reduxjs/toolkit";

export const getAllPhonebookContacts = (state) =>
  state.contacts.phonebookContacts;
export const getPhonebookFilter = (state) => state.contacts.phonebookFilter;

export const getVisibleContact = createSelector(
  [getAllPhonebookContacts, getPhonebookFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  }
);
