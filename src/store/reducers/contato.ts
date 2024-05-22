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
      phone: '1234567890',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Gabriel',
      phone: '1234567890',
      email: 'Joelma@gmail.com'
    },
    {
      id: 3,
      name: 'Thiago',
      phone: '1234567890',
      email: 'Thiago@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactModel>) => {
      const contactExists = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Já existe um contato com este nome na agenda :D')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newTask = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },

    deleteContact: (state, action: PayloadAction<number>) => {
      state.items = [...state.items.filter((sc) => sc.id !== action.payload)]
    },
    updateContact: (state, action: PayloadAction<contactModel>) => {
      const { id, name } = action.payload
      const index = state.items.findIndex((c) => c.id === id)

      if (index >= 0) {
        const existingContactIndex = state.items.findIndex(
          (c) => c.name === name && c.id !== id
        )

        if (existingContactIndex >= 0) {
          alert('Este contato com este nome já existe!')
        } else {
          state.items[index] = action.payload
        }
      }
    }
  }
})

export const { addContact, deleteContact, updateContact } = contactSlice.actions

export default contactSlice.reducer
