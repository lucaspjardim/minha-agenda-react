import { useSelector } from 'react-redux'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contatos from '../../components/Contatos'
import Formulario from '../../containers/Formulario'
import { RootReducer } from '../../store'

const Home = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  return (
    <>
      <Formulario />
      <Contatos contacts={contacts} />
      <BotaoAdicionar />
    </>
  )
}

export default Home
