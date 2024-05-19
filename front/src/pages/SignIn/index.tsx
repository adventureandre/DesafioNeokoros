// Login.jsx
import { FormEvent, useState } from 'react'
import { useAuth } from '../../context/auth'
import {
  Button,
  Card,
  Container,
  Input,
  InputContainer,
  LeftSection,
  Link,
  Logo,
  RightSection,
  Title,
  IconWrapper,
} from './styles'
import { Envelope, Key } from 'phosphor-react'
import { Navigate } from 'react-router-dom'

export const SignIn = () => {
  const { signIn, signed } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signIn({ email, password })
    } catch (error) {
      console.error('Failed to sign in:', error)
    }
  }

  if (signed) {
    return <Navigate to="/" />
  } else {
    return (
      <Container>
        <Card>
          <LeftSection>
            <Logo />

            <Title>Organize sua Vida!</Title>
          </LeftSection>
          <RightSection>
            <form onSubmit={handleSubmit}>
              <h2>Faça seu login!</h2>

              <InputContainer>
                <IconWrapper>
                  <Envelope size={32} />
                </IconWrapper>
                <Input
                  type="email"
                  placeholder="Digite seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <IconWrapper>
                  <Key size={32} />
                </IconWrapper>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>

              <Button type="submit">Entrar</Button>
              <Link href="/signUp">Criar Conta</Link>
            </form>
          </RightSection>
        </Card>
      </Container>
    )
  }
}
