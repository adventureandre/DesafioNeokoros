import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { CardTodo, Container } from './styles'
import { Header } from '../../components/Header'
import { FormNewTask } from '../../components/FromNewTask'
import { TaskList } from '../../components/TasksList'
import { PainelUser } from '../../components/PainelUser'

export interface TaskProps {
  id: string
  title: string
  description: string | null
  status: 'pending' | 'completed' | 'in-progress'
  priority: 'low' | 'high' | 'medium'
}

export const Tasks = () => {
  const { signed } = useAuth()

  if (!signed) {
    return <Navigate to="/signin" />
  }

  return (
    <Container>
      <Header />
      <CardTodo>
        <FormNewTask />
        <TaskList />
      </CardTodo>
      <PainelUser />
    </Container>
  )
}
