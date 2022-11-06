import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slices/contactsSlice';
import filterSlice from './slices/filterSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    items: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],

  devTools: process.env.NODE_ENV === 'development',
});

export const { add, remove } = contactSlice.actions;
export const { filter } = filterSlice.actions;
