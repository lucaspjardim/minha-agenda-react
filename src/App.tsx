import React from 'react'
import Formulario from './components/Formulario'
import Contatos from './components/Contatos'
import { Provider } from 'react-redux'
import * as S from './styles'
import store from './store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <S.globalStyle />
        <Formulario />
        <Contatos />
      </Provider>
    </div>
  )
}

export default App
