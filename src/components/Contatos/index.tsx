import { useDispatch, useSelector } from 'react-redux'
import {
  ContactListContainer,
  ContactItem,
  BotaoCancelarRemover,
  SearchBar,
  SearchBarWrapper,
  SearchContainer,
  SearchIcon,
  DescricaoContainer,
  Descricao,
  BotaoEditar,
  BotaoSalvar
} from './styles'
import { RootReducer } from '../../store'
import { setSearchValue } from '../../store/reducers/pesquisa'
import { deleteContact, updateContact } from '../../store/reducers/contato'
import { useState } from 'react'
import Contact from '../../models/Contacts'

type Props = {
  contacts: Contact[]
}

const Contatos = ({ contacts }: Props) => {
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { searchValue } = useSelector((state: RootReducer) => state.search)

  const handleRemoverContato = (id: number) => {
    dispatch(deleteContact(id))
  }

  const startEditing = (contato: Contact) => {
    setEditingId(contato.id)
    setName(contato.name)
    setEmail(contato.email)
    setPhone(contato.phone)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setName('')
    setEmail('')
    setPhone('')
  }

  const handleSave = (id: number) => {
    dispatch(updateContact({ id, name, email, phone }))
    setEditingId(null)
  }

  const filterContacts = () => {
    let filter = [...contacts]

    if (searchValue) {
      filter = filter.filter(
        (item) =>
          item.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          item.phone
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          item.email
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
      )
    }
    return filter
  }

  return (
    <ContactListContainer>
      <h2>Lista de Contatos:</h2>
      <SearchContainer>
        <SearchBarWrapper>
          <SearchBar
            type="text"
            placeholder="Pesquisar contatos..."
            value={searchValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
          />
          <SearchIcon>🔍</SearchIcon>
        </SearchBarWrapper>
      </SearchContainer>
      <ul>
        {filterContacts().map((contato) => (
          <ContactItem key={contato.id}>
            <DescricaoContainer>
              <label>Nome:</label>
              <Descricao
                value={editingId === contato.id ? name : contato.name}
                disabled={editingId !== contato.id}
                onChange={(e) => setName(e.target.value)}
              />
            </DescricaoContainer>
            <DescricaoContainer>
              <label>Telefone:</label>
              <Descricao
                value={editingId === contato.id ? phone : contato.phone}
                disabled={editingId !== contato.id}
                onChange={(e) => setPhone(e.target.value)}
              />
            </DescricaoContainer>
            <DescricaoContainer>
              <label>Email:</label>
              <Descricao
                value={editingId === contato.id ? email : contato.email}
                disabled={editingId !== contato.id}
                onChange={(e) => setEmail(e.target.value)}
              />
            </DescricaoContainer>
            {editingId === contato.id ? (
              <>
                <BotaoSalvar onClick={() => handleSave(contato.id)}>
                  SALVAR
                </BotaoSalvar>
                <BotaoCancelarRemover onClick={cancelEdit}>
                  CANCELAR
                </BotaoCancelarRemover>
              </>
            ) : (
              <>
                <BotaoEditar onClick={() => startEditing(contato)}>
                  EDITAR
                </BotaoEditar>
                <BotaoCancelarRemover
                  onClick={() => handleRemoverContato(contato.id)}
                >
                  DELETAR
                </BotaoCancelarRemover>
              </>
            )}
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  )
}

export default Contatos
