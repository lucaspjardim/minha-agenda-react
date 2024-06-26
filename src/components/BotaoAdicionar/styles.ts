import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: #030ffc;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
`
