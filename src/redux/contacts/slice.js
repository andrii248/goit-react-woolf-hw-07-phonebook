import { createSlice } from '@reduxjs/toolkit';
import { createContact, deleteContact, getContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};

const activateLoading = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, activateLoading)
      .addCase(getContacts.rejected, handleError)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(createContact.pending, activateLoading)
      .addCase(createContact.rejected, handleError)
      .addCase(createContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
      })
      .addCase(deleteContact.pending, activateLoading)
      .addCase(deleteContact.rejected, handleError)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.filter(el => el.id !== payload.id);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
