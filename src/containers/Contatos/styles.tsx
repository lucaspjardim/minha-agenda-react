import styled from 'styled-components'

export const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
  }
`

export const ContactItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;

    strong {
      font-weight: bold;
    }

    &.name {
      color: #007bff; /* Cor azul para o nome */
    }

    &.phone {
      color: #28a745; /* Cor verde para o telefone */
    }

    &.email {
      color: #dc3545; /* Cor vermelha para o email */
    }
  }
`
