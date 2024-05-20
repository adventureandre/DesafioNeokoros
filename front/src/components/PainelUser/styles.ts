import { UserCircle } from 'phosphor-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  position: absolute;
  right: 35px;
  top: 25px;

  h2 {
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.gray['gray-300']};
    margin-bottom: 5px;
  }
  button {
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.gray['gray-100']};
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.green['green-700']};
    border: none;
  }
`

export const UserIcon = styled(UserCircle).attrs(() => ({
  size: 56,
}))`
  color: ${({ theme }) => theme.colors.primary};
`
