import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as S from './styles'
import store from './store'
import Home from './pages/Home'
import Formulario from './containers/Formulario'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Formulario />
  }
])

function App() {
  return (
    <div>
      <Provider store={store}>
        <S.globalStyle />
        <RouterProvider router={rotas} />
      </Provider>
    </div>
  )
}

export default App
