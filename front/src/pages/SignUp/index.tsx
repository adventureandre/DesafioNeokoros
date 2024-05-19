import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useAuth } from '../../context/auth'
import {
  Button,
  Card,
  Container,
  Input,
  InputContainer,
  LeftSection,
  Logo,
  RightSection,
  Title,
  IconWrapper,
  ErrorMsg,
} from './styles'
import { CheckCircle, Envelope, IdentificationBadge, Key } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  name: z.string(),
  email: z.string().email({ message: 'Digite um email válido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
  confirmPassword: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
})

type SchemaTypes = z.infer<typeof schema>

export const SignUp = () => {
  const { signed, signUp } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaTypes>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: SchemaTypes) => {
    try {
      await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      navigate('/')
    } catch (error) {
      console.error('Failed to sign Up:', error)
    }
  }

  if (signed) {
    navigate('/')
    return null
  }

  return (
    <Container>
      <Card>
        <LeftSection>
          <Logo />
          <Title>Organize sua Vida!</Title>
        </LeftSection>
        <RightSection>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Crie sua conta!</h2>

            <InputContainer>
              <IconWrapper>
                <IdentificationBadge size={32} />
              </IconWrapper>
              <Input
                type="text"
                placeholder="Digite seu Nome"
                {...register('name')}
              />
            </InputContainer>
            {errors.email && <ErrorMsg>{errors.name.message}</ErrorMsg>}

            <InputContainer>
              <IconWrapper>
                <Envelope size={32} />
              </IconWrapper>
              <Input
                type="email"
                placeholder="Digite um Email"
                {...register('email')}
              />
            </InputContainer>
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}

            <InputContainer>
              <IconWrapper>
                <Key size={32} />
              </IconWrapper>
              <Input
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
            </InputContainer>
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

            <InputContainer>
              <IconWrapper>
                <CheckCircle size={32} />
              </IconWrapper>
              <Input
                type="password"
                placeholder="Confirme Senha"
                {...register('confirmPassword')}
              />
            </InputContainer>
            {errors.confirmPassword && (
              <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
            )}

            <Button type="submit">Entrar</Button>
          </form>
        </RightSection>
      </Card>
    </Container>
  )
}
