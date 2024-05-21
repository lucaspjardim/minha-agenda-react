import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Adiciona o efeito de desfoque no fundo */
`

export const FormContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  backdrop-filter: blur(5px); /* Adiciona o efeito de desfoque no formulário */

  h2 {
    font-style: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`

export const FormButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  background-color: white;

  &:last-child {
    margin-bottom: 0;
    background-color: white;
  }
`

export const SuccessMessage = styled.div`
  color: #155724; /* Cor verde mais escura */
  background-color: #d4edda; /* Cor de fundo verde clara */
  border: 1px solid #c3e6cb; /* Borda verde mais escura */
  border-radius: 4px; /* Borda arredondada */
  padding: 10px 15px; /* Espaçamento interno */
  font-weight: bold;
  margin-bottom: 4px;
`
export const Teste = styled.a`
  margin-top: 8px;
  color: blue;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`
