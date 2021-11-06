import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import * as phonebookAPI from "../../services/phonebook-api";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContact = createAsyncThunk(
  "phonebook/addContact",
  async (contact) => {
    const data = await phonebookAPI.addContact(contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (id) => {
    await phonebookAPI.deleteContact(id);
    return id;
  }
);

export const fetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async () => {
    const contacts = await phonebookAPI.fetchContacts();
    return contacts;
  }
);
