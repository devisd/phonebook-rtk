import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add(state, action) {
      return state.includes(action.payload.name.toLowerCase())
        ? alert(`${state.name} уже есть в контактах`)
        : [...state, action.payload]; // СТАРЫЙ МЕТОД
      // : state.push(action.payload); С ИСПОЛЬЗОВАНИЕМ ВШИТОГО IMMER'а
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export default contactSlice;
