import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contato'
import searchReducer from './reducers/pesquisa'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    search: searchReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
