import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

type Contact = {
    id: number | null,
    name: string,
    username: string,
    email: string,
}

interface ContactState {
  contacts: Array<Contact>
}

const initialState: ContactState = {
  contacts: []
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
      setContactState: (state, action: PayloadAction<Array<Contact>>) => {
        state.contacts = action.payload;
      }
    },
  });

export const { setContactState } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;