import styled from 'styled-components'
import LogoImg from '../../assets/logo.webp'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
`

export const Card = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

export const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-size: 1.1rem;
`

export const RightSection = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 20px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  padding: 10px;
`

export const IconWrapper = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 10px;
`

export const Button = styled.button`
  padding: 15px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryOver}
  );
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primaryOver},
      ${({ theme }) => theme.colors.primary}
    );
  }
`

export const Link = styled.a`
  width: 100%;
  text-align: center;
  display: block;
  color: #a777e3;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.img.attrs(() => ({
  src: LogoImg,
}))`
  width: 200px;
`
