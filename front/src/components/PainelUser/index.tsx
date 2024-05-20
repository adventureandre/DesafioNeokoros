import { useAuth } from '../../context/auth'
import { Container, UserIcon } from './styles'

export const PainelUser = () => {
  const { userId, signOut } = useAuth()

  return (
    <Container>
      <UserIcon />
      <h2></h2>
      <button
        onClick={() => {
          signOut()
        }}
      >
        sair
      </button>
    </Container>
  )
}
