import { useSelector } from 'react-redux'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import Contatos from '../../components/Contatos'
import { RootReducer } from '../../store'

const Home = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  return (
    <>
      <Contatos contacts={contacts} />
      <BotaoAdicionar />
    </>
  )
}

export default Home
