import React from 'react'
import { FormContainer, FormInput, FormButton } from './styles'

const Formulario: React.FC = () => {
  return (
    <FormContainer>
      <h2>Preencha os dados:</h2>
      <form>
        <FormInput type="text" placeholder="Nome" />
        <FormInput type="tel" placeholder="Telefone" />
        <FormInput type="email" placeholder="Email" />
        <FormButton type="submit">Enviar</FormButton>
      </form>
    </FormContainer>
  )
}

export default Formulario
