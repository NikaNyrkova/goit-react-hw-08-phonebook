import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { filterContacts } from "./phonebook-actions";
import {
  fetchContacts,
  deleteContact,
  addContact,
} from "./phonebook-operations";

const contactsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.fulfilled]: () => false,
});

export default combineReducers({
  phonebookContacts: contactsReducer,
  phonebookFilter: filterReducer,
  loading,
});
