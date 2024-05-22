import styled from 'styled-components'
import { Botao } from '../../styles'

export const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(202, 196, 201, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
`

export const ContactItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  background-color: #fff;

  &:last-child {
    border-bottom: none;
  }

  strong {
    font-weight: bold;
    color: #333;
  }
`

export const DescricaoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    width: 80px;
    font-weight: bold;
    color: #555;
    margin-bottom: 15px;
    margin-right: 10px;
  }
`

export const Descricao = styled.textarea`
  flex: 1;
  font-size: 14px;
  resize: none;
  border: none;
  background-color: transparent;
  padding: 4px;
  margin: 0;
  transition: all 0.2s;
  color: #333;
  overflow: hidden;

  &:disabled {
    border: none;
    background-color: transparent;
    color: #333;
    cursor: default;
  }

  &:enabled {
    border: 1px solid #ddd;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border-color: #007bff;
    outline: none;
    background-color: #fff;
  }
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
  color: white;
  font-weight: bold;
  margin-right: 5px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
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

export const BotaoEditar = styled(Botao)`
  background-color: yellow;
  color: black;
  font-weight: bold;
  margin-right: 5px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
  color: white;
  font-weight: bold;
  margin-right: 5px;
`
