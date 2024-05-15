import React from 'react'
import { ContactListContainer, ContactItem } from './styles'

const Contatos: React.FC = () => {
  const contatos = [
    { id: 1, nome: 'João', telefone: '123456789', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', telefone: '987654321', email: 'maria@example.com' }
  ]

  return (
    <ContactListContainer>
      <h2>Lista de Contatos:</h2>
      <ul>
        {contatos.map((contato) => (
          <ContactItem key={contato.id}>
            <p>
              <strong>Nome:</strong> {contato.nome}
            </p>
            <p>
              <strong>Telefone:</strong> {contato.telefone}
            </p>
            <p>
              <strong>Email:</strong> {contato.email}
            </p>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  )
}

export default Contatos
