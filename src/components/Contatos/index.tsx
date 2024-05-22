import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
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
    <S.ContactListContainer>
      <h2>Lista de Contatos:</h2>
      <S.SearchContainer>
        <S.SearchBarWrapper>
          <S.SearchBar
            type="text"
            placeholder="Pesquisar contatos..."
            value={searchValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
          />
          <S.SearchIcon>🔍</S.SearchIcon>
        </S.SearchBarWrapper>
      </S.SearchContainer>
      <ul>
        {filterContacts().map((contato) => (
          <S.ContactItem key={contato.id}>
            <S.DescricaoContainer>
              <label>Nome:</label>
              <S.Descricao
                value={editingId === contato.id ? name : contato.name}
                disabled={editingId !== contato.id}
                onChange={(e) => setName(e.target.value)}
              />
            </S.DescricaoContainer>
            <S.DescricaoContainer>
              <label>Telefone:</label>
              <S.Descricao
                value={editingId === contato.id ? phone : contato.phone}
                disabled={editingId !== contato.id}
                onChange={(e) => setPhone(e.target.value)}
              />
            </S.DescricaoContainer>
            <S.DescricaoContainer>
              <label>Email:</label>
              <S.Descricao
                value={editingId === contato.id ? email : contato.email}
                disabled={editingId !== contato.id}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.DescricaoContainer>
            {editingId === contato.id ? (
              <>
                <S.BotaoSalvar onClick={() => handleSave(contato.id)}>
                  SALVAR
                </S.BotaoSalvar>
                <S.BotaoCancelarRemover onClick={cancelEdit}>
                  CANCELAR
                </S.BotaoCancelarRemover>
              </>
            ) : (
              <>
                <S.BotaoEditar onClick={() => startEditing(contato)}>
                  EDITAR
                </S.BotaoEditar>
                <S.BotaoCancelarRemover
                  onClick={() => handleRemoverContato(contato.id)}
                >
                  DELETAR
                </S.BotaoCancelarRemover>
              </>
            )}
          </S.ContactItem>
        ))}
      </ul>
    </S.ContactListContainer>
  )
}

export default Contatos
