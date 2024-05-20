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
  }
  strong {
    font-weight: bold;
  }
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  pointer-events: none;
`
