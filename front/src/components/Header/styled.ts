import styled from 'styled-components'
import LogoImg from '../../assets/logo.webp'

export const Conteiner = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;

  display: flex;
  justify-content: center;

  height: 150px;
  margin-bottom: 5px;
`
export const Logo = styled.img.attrs(() => ({
  src: LogoImg,
}))`
  height: 120px;
  width: 120px;
`
