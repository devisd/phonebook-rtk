import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slices/contactsSlice';
import logger from 'redux-logger';
import filterSlice from './slices/filterSlice';

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
