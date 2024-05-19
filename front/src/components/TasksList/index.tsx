import { useTasks } from '../../context/TaskContext'
import {
  Container,
  Content,
  InfoTask,
  InfoTaskExecutadas,
  InfoTaskTotal,
  TaskBox,
} from './styles'

export const TaskList = () => {
  const { tasks } = useTasks()
  const totalConcluidas = tasks!.filter(
    (task) => task.status === 'complete',
  ).length

  return (
    <Container>
      <InfoTask>
        <InfoTaskTotal>
          Tarefas criadas <em>{tasks!.length}</em>
        </InfoTaskTotal>
        <InfoTaskExecutadas>
          Concluídas{' '}
          <em>
            {totalConcluidas} de {tasks!.length}
          </em>
        </InfoTaskExecutadas>
      </InfoTask>
      <Content>
        <TaskBox>
akii
        </TaskBox>
      </Content>
    </Container>
  )
}
