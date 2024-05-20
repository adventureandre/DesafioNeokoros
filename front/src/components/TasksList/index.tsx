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
import { TaskProps } from '../../pages/Tasks'
import { toast } from 'sonner'

export const TaskList = () => {
  const { tasks, handleStatusTask, handleDeleteTask } = useTasks()
  const totalConcluidas =
    tasks?.filter((task) => task.status === 'completed').length || 0

  const toggleTaskStatus = (task: TaskProps) => {
    const newStatus = task.status === 'completed' ? 'pending' : 'completed'
    handleStatusTask(task.id, newStatus)
  }

  return (
    <Container>
      <InfoTask>
        <InfoTaskTotal>
          Tarefas criadas <em>{tasks?.length || 0}</em>
        </InfoTaskTotal>
        <InfoTaskExecutadas>
          Concluídas{' '}
          <em>
            {totalConcluidas} de {tasks?.length || 0}
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
                checked={task.status === 'completed'}
                onChange={() => toggleTaskStatus(task)}
              />
              <label
                htmlFor={`completed-${task.id}`}
                className={task.status === 'completed' ? 'completed' : ''}
              >
                {task.title}
              </label>
              <button
                onClick={() => {
                  handleDeleteTask(task.id)
                  toast.error('Tarefa excluida!')
                }}
              >
                <Trash size={24} />
              </button>
            </TaskBox>
          ))}
      </Content>
    </Container>
  )
}
