import styled from 'styled-components'
import { Botao } from '../../styles'

export const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
  }
`

export const ContactItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;

    strong {
      font-weight: bold;
    }
  }
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`