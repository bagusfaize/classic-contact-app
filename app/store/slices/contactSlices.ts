import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { ContactProps, ContactState } from "@/app/types/type";

const initialState: ContactState = {
  contacts: []
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactState: (state, action: PayloadAction<Array<ContactProps>>) => {
      state.contacts = action.payload;
    },
    addContact: (state, action: PayloadAction<ContactProps>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<ContactProps>) => {
      const selectedIndex = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts[selectedIndex] = action.payload;
    },
    deleteContact: (state, action: PayloadAction<Number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    }
  },
});

export const selectContactById = (state: ContactState, contactId: number): ContactProps | undefined => {
  return state.contacts.find(contact => contact.id === contactId);
};


export const { setContactState, addContact, updateContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;