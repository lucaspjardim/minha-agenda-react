import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  FormContainer,
  FormInput,
  FormButton,
  Overlay,
  SuccessMessage,
  Teste
} from './styles'
import { FormEvent } from 'react'
import { addContact } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false) // Estado para controlar a exibição da mensagem

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const registerForm = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      addContact({
        name,
        phone,
        email,
        id: 0
      })
    )
    // Exibe a mensagem de sucesso
    setShowSuccessMessage(true)
  }

  const handleBackButtonClick = () => {
    // Navega de volta para a página inicial ("/")
    navigate('/')
  }

  return (
    <Overlay>
      <FormContainer>
        <h2>Adicionar contatos</h2>
        {showSuccessMessage && (
          <SuccessMessage>Contato adicionado</SuccessMessage>
        )}
        <form onSubmit={registerForm}>
          <FormInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          />
          <FormInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Telefone"
          />
          <FormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          {/* Botão de submissão dentro do formulário */}
          <FormButton type="submit">Enviar</FormButton>
          {/* Botão para voltar para a página inicial */}
          <Teste onClick={handleBackButtonClick}>Voltar</Teste>
        </form>
        {/* Exibe a mensagem de sucesso se showSuccessMessage for verdadeiro */}
      </FormContainer>
    </Overlay>
  )
}

export default Formulario
