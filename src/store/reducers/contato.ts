import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import contactModel from '../../models/Contacts'

type contactState = {
  items: contactModel[]
}

const initialState: contactState = {
  items: [
    {
      id: 1,
      name: 'John',
      phone: 1234567890,
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Gabriel',
      phone: 1234567890,
      email: 'Gabriel@gmail.com'
    },
    {
      id: 3,
      name: 'Thiago',
      phone: 1234567890,
      email: 'Thiago@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactModel>) => {
      state.items.push(action.payload)
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = [...state.items.filter((sc) => sc.id !== action.payload)]
    },
    updateContact: (state, action: PayloadAction<contactModel>) => {
      // const { id, name, phone, email } = action.payload
      const index = state.items.findIndex((c) => c.id === action.payload.id)

      if (index >= 0) {
        state.items[index] = action.payload
      }
    }
  }
})

export const { addContact, deleteContact, updateContact } = contactSlice.actions

export default contactSlice.reducer
