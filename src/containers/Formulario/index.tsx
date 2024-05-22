import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
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
    <S.Overlay>
      <S.FormContainer>
        <h2>Adicionar contatos</h2>
        {showSuccessMessage && (
          <S.SuccessMessage>Contato adicionado</S.SuccessMessage>
        )}
        <form onSubmit={registerForm}>
          <S.FormInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          />
          <S.FormInput
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Telefone"
          />
          <S.FormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          {/* Botão de submissão dentro do formulário */}
          <S.FormButton type="submit">Enviar</S.FormButton>
          {/* Botão para voltar para a página inicial */}
          <S.Teste onClick={handleBackButtonClick}>Voltar</S.Teste>
        </form>
        {/* Exibe a mensagem de sucesso se showSuccessMessage for verdadeiro */}
      </S.FormContainer>
    </S.Overlay>
  )
}

export default Formulario
