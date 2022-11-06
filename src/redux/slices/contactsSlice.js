import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  removeContact,
  newContact,
} from 'services/getContactsService';

export const getContactsService = createAsyncThunk(
  'fetchContacts/getContactsService',

  async function () {
    try {
      const data = await fetchContacts.getList();

      return data;
    } catch (error) {}
  }
);

export const removeContactsService = createAsyncThunk(
  'fetchContacts/removeContactsService',

  async function (id) {
    try {
      const data = await removeContact.removeContact(id);

      return data.id;
    } catch (error) {}
  }
);

export const addContactsService = createAsyncThunk(
  'fetchContacts/addContactsService',

  async function (contactsData) {
    try {
      const data = await newContact.addContact(contactsData);

      return data;
    } catch (error) {}
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContactsService.fulfilled, (state, action) => {
      return [...state, ...action.payload];
    });
    builder.addCase(removeContactsService.fulfilled, (state, action) => {
      return state.filter(el => el.id !== action.payload);
    });
    builder.addCase(addContactsService.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default contactSlice;
