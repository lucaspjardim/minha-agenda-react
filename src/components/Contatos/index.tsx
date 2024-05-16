import { useDispatch, useSelector } from 'react-redux'
import {
  ContactListContainer,
  ContactItem,
  BotaoCancelarRemover
} from './styles'
import { RootReducer } from '../../store'
import { deleteContact } from '../../store/reducers/contato'
import { Botao } from '../../styles'

const Contatos = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.contacts)

  const handleRemoverContato = (id: number) => {
    dispatch(deleteContact(id))
  }

  return (
    <ContactListContainer>
      <h2>Lista de Contatos:</h2>
      <ul>
        {items.map((contato) => (
          <ContactItem key={contato.id}>
            <p>Nome: {contato.name}</p>
            <p>Telefone: {contato.phone}</p>
            <p>Email: {contato.email}</p>
            <Botao>Editar</Botao>
            <BotaoCancelarRemover
              onClick={() => handleRemoverContato(contato.id)}
            >
              Remover
            </BotaoCancelarRemover>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  )
}

export default Contatos
