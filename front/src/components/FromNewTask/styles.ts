import styled from 'styled-components'

export const Input = styled.input`
  padding: 15px 10px;
  margin-right: 5px;

  border-radius: 6px;
  border: 1px solid #0d0d0d;
  color: #1a1c1c;
  font-size: 18px;
  font-weight: 400;
  width: 100%;

  &:hover,
  &:focus {
    border-color: #646cff;
    outline: none;
    color: #0d0d0d;
  }
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  padding: 5px 15px;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.primaryOver};
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`
