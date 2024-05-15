import React from 'react'
import Formulario from './containers/Main'
import Contatos from './containers/Contatos'

const App: React.FC = () => {
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <Formulario />
      <Contatos />
    </div>
  )
}

export default App
