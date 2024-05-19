import { Trash } from 'phosphor-react'
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
  const { tasks, handleStatusTask, handleDeleteTask } = useTasks()
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
        {tasks &&
          tasks.map((task) => (
            <TaskBox key={task.id}>
              <input
                type="checkbox"
                name="completed"
                id={`completed-${task.id}`}
                onChange={() => handleStatusTask(task.id)}
              />
              <label
                htmlFor={`completed-${task.id}`}
                className={task.status === 'complete' ? 'completed' : ''}
              >
                {task.title}
              </label>
              <button onClick={() => handleDeleteTask(task.id)}>
                <Trash size={24} />
              </button>
            </TaskBox>
          ))}
      </Content>
    </Container>
  )
}
