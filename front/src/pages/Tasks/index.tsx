import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { CardTodo, Container } from './styles'
import { Header } from '../../components/Header'

import { FormNewTask } from '../../components/FromNewTask'

export const Tasks = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div> // Aki posso Criar um Skeleton
  }

  return signed ? (
    <Container>
      <Header />
      <CardTodo>
        <FormNewTask />
      </CardTodo>
    </Container>
  ) : (
    <Navigate to="/signin" />
  )
}
