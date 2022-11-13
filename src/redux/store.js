import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './slices/contactsApi';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export const { filter } = filterSlice.actions;
