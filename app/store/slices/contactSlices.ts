import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { ContactProps, ContactInterface } from "@/app/types/type";

const initialState: ContactInterface = {
  contacts: []
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
      setContactState: (state, action: PayloadAction<Array<ContactProps>>) => {
        state.contacts = action.payload;
      }
    },
  });

export const { setContactState } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;