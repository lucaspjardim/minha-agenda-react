import { useDispatch, useSelector } from 'react-redux'
import {
  ContactListContainer,
  ContactItem,
  BotaoCancelarRemover,
  SearchBar,
  SearchBarWrapper,
  SearchContainer,
  SearchIcon
} from './styles'
import { RootReducer } from '../../store'
import { setSearchValue } from '../../store/reducers/pesquisa'
import { deleteContact } from '../../store/reducers/contato'
import { Botao } from '../../styles'

const Contatos = () => {
  const dispatch = useDispatch()
  const { searchValue } = useSelector((state: RootReducer) => state.search)
  const { items } = useSelector((state: RootReducer) => state.contacts)

  const handleRemoverContato = (id: number) => {
    dispatch(deleteContact(id))
  }
  const filterContacts = () => {
    let filter = [...items]

    if (searchValue) {
      filter = filter.filter(
        (items) =>
          items.name
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) ||
          items.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
          items.email.toLowerCase().includes(searchValue.toLowerCase())
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
