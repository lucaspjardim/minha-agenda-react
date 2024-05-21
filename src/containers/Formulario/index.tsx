import { useDispatch } from 'react-redux'
import { FormContainer, FormInput, FormButton } from './styles'
import { FormEvent, useState } from 'react'
import { addContact } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
  }

  return (
    <FormContainer>
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
        <FormButton type="submit" onClick={() => navigate('/')}>
          Enviar{' '}
        </FormButton>
      </form>
    </FormContainer>
  )
}

export default Formulario
